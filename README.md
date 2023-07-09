# This is Next.js Template App <br /> with (type-script, styled-components, mui, axios, iron-session, formik...)

## Getting Started


```bash
npm install
npm run dev
```

## Branches
$\color[RGB]{210,144,197} styled-components$ <br />
$\color[RGB]{48,127,211} mui$ <br />
$\color[RGB]{93,44,217} axios$ <br />
$\color[RGB]{153,153,153} iron-session$ <br />
$\color[RGB]{18,82,198} formik-yup$ <br />

## Lint Rule
``` javascript
{
  // 파일 확장자를 .ts나 .tsx 모두 허용함
  "react/jsx-filename-extension": ["warn", { "extensions": [".ts", ".tsx"] }],

  // 불필요한 catch 막기 - 끔
  "no-useless-catch": "off",

  // 선언 전 사용 - 끔
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": "off",

  // 컴포넌트 props를 구조분해 할당 하지 말 것 {...props} - 끔
  "react/jsx-props-no-spreading": "off",

  // jsx에서 boolean 값 생략 lint - 끔
  "react/jsx-boolean-value": "off",

  // unused variation - 경고만
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": "warn",

  // alert 사용하지 말 것 - 끔
  "no-alert": "off",

  // export { default as ~ } from ''; 사용하기 위해 끔
  "import/prefer-default-export": "off",

  // default props를 설정할 것 - 끔
  "react/require-default-props": "off",

  // react component를 arrow-component만 허용
  "react/function-component-definition":[
    2,
    { "namedComponents": [
      "arrow-function"
    ] }
  ]
}
```