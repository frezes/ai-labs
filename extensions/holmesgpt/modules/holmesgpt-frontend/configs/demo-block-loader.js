const fs = require('fs');
const path = require('path');

function demoBlockLoader(source) {
  const callback = this.async();

  if (!this.resourcePath.endsWith('.mdx')) {
    return callback(null, source);
  }

  try {
    const processedSource = processDemoBlocks(source, this.resourcePath);
    callback(null, processedSource);
  } catch (error) {
    console.error('Error in demo block loader:', error);
    callback(null, source);
  }
}

function processDemoBlocks(source, filePath) {
  const demoBlockRegex = /<DemoBlock\s*([\s\S]*?)>([\s\S]*?)<\/DemoBlock>/g;

  return source.replace(demoBlockRegex, (match, props, children) => {
    try {
      const propsObj = parseProps(props);

      const demoComponentResult = extractDemoComponent(children);

      propsObj.componentName = demoComponentResult.componentName;

      const sourceCode = getSourceCode(propsObj, filePath);

      return generateTransformedCode(demoComponentResult.component, sourceCode, propsObj);
    } catch (error) {
      console.error('Error processing DemoBlock:', error);
      return match;
    }
  });
}

function parseProps(propsString) {
  const props = {};

  const templateStringRegex = /(\w+)=\{`([\s\S]*?)`\}/g;
  let match;

  while ((match = templateStringRegex.exec(propsString)) !== null) {
    const [, key, value] = match;
    props[key] = value.trim();
  }

  const stringRegex = /(\w+)=["']([^"']*)["']/g;
  while ((match = stringRegex.exec(propsString)) !== null) {
    const [, key, value] = match;
    if (!props[key]) {
      props[key] = value;
    }
  }

  const boolRegex = /(\w+)(?=\s|>)/g;
  while ((match = boolRegex.exec(propsString)) !== null) {
    const [, key] = match;
    if (!props[key] && !propsString.includes(`${key}=`)) {
      props[key] = 'true';
    }
  }

  return props;
}

function extractDemoComponent(children) {
  const componentRegex = /<(\w+)([\s\S]*?)>/;
  const match = children.match(componentRegex);

  if (match) {
    const [, componentName, componentProps] = match;
    return {
      component: `<${componentName}${componentProps}>`,
      componentName: componentName,
    };
  }

  return {
    component: children.trim(),
    componentName: 'Demo',
  };
}

function getSourceCode(props, filePath) {
  if (props.code) {
    return props.code;
  }

  const demoPath = getDemoPath(props, filePath);
  if (demoPath && fs.existsSync(demoPath)) {
    try {
      const demoSource = fs.readFileSync(demoPath, 'utf-8');
      return extractJSXFromSource(demoSource);
    } catch (error) {
      console.error('Error reading demo source:', error);
    }
  }

  return '';
}

function getDemoPath(props, mdxPath) {
  const dir = path.dirname(mdxPath);

  const componentName = props.componentName || 'Demo';

  const demoPath = path.join(dir, `${componentName}.tsx`);

  if (fs.existsSync(demoPath)) {
    return demoPath;
  }

  const demoPathJsx = path.join(dir, `${componentName}.jsx`);
  if (fs.existsSync(demoPathJsx)) {
    return demoPathJsx;
  }

  return null;
}

function extractJSXFromSource(source) {
  return source;
}

function generateTransformedCode(demoComponent, sourceCode, props) {
  const title = props.title || '';
  const description = props.description || '';

  const fullCode = generateFullCode(sourceCode, props.codeTemplate);

  return `<DemoBlock title="${title}" description="${description}">
  ${demoComponent}
\`\`\`tsx
${fullCode}
\`\`\`
</DemoBlock>`;
}

function generateFullCode(jsxCode, template) {
  if (template) {
    return template.replace('{{JSX}}', jsxCode);
  }

  return jsxCode;
}

module.exports = demoBlockLoader;
