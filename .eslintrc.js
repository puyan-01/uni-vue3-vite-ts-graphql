module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
  // eslint-plugin-vue
  plugins: [
    'vue', // 引入vue的插件 vue <==> eslint-plugin-vue
    // 这个包需要安装了第7步的三个包再引入
    'eslint-plugin-prettier',
    'prettier', // 引入规范插件  prettier <==>  eslint-plugin-prettier
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    uni: 'readonly',
    declare: 'readonly',
    ComponentCustomOptions: 'readonly',
    type: 'readonly',
  },
  // 这里时配置规则的,自己看情况配置
  rules: {
    // semi: ['error', 'never'], // 不使用分号
    // Enable vue/script-setup-uses-vars rule
    '@vue/compiler-sfc': 'off',
    'prettier/prettier': [0, { semi: false }],
    // 放过
    'no-plusplus': 0, //不允许使用++ --运算符
    'no-else-return': 0, //如果if语句有return，else里的return不用放在else里

    // 警告
    // 错误

    // 最大长度
    'max-len': [
      2,
      {
        // code: 60,
        ignoreTrailingComments: true,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // "newline-after-var": 1, //变量声明后必须空一行
    'padding-line-between-statements': [
      //语句之间的填充行
      'error',
      { blankLine: 'always', prev: 'const', next: 'return' },
      { blankLine: 'always', prev: 'let', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'max-depth': 2, //嵌套块深度
    'no-shadow-restricted-names': 2, //js关键字和保留字不能作为函数名或者变量名
    'no-cond-assign': 2, //条件语句的条件中不允许出现赋值运算符
    'no-dupe-keys': 2, //对象中不允许出现重复的键
    'no-multi-spaces': 2, //不允许出现多余的空格
    'no-multi-str': 2, //不允许用\来让字符串换行
    'no-var': 2, //使用let和const代替var
    'no-lonely-if': 2, //不允许else语句内只有if语句
    'no-redeclare': 2, //不允许变量重复声明
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'], //不允许混用tab和空格
    'no-with': 2, //不允许使用with语句
    'arrow-parens': ['error', 'always'], // 函数必须有括号
    'no-multiple-empty-lines': [2, { max: 1 }], //空行最多不能超过两行
    'no-use-before-define': [0, 'nofunc'], //不允许在未定义之前就使用变量"indent": 2, //强制一致的缩进风格
    'no-eq-null': 2, //不允许对null用==或者!=
    'guard-for-in': 2, //监视for in循环，防止出现不可预料的情况s
    complexity: 2, //限制条件语句的复杂度
    'no-sparse-arrays': 2, //数组中不允许出现空位置
    'no-unreachable': 2, //在return，throw，continue，break语句后不允许出现不可能到达的语句
    'use-isnan': 2, //要求检查NaN的时候使用isNaN()
    'no-nested-ternary': 2, //不允许使用嵌套的三目运算符
    'no-ex-assign': 'error', //禁止对catch子句的参数重新赋值
    'no-loss-of-precision': 'error', //禁止数字字面量中使用前导和末尾小数点
    'no-self-compare': 'error', //禁止自身比较

    'no-dupe-args': 2, //函数定义的时候不允许出现重复的参数
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-multiple-template-root': 'off',
    'no-mutating-props': 'off',
    'vue/no-v-html': 'off',
    '@typescript-eslint/no-this-alias': 0,

    // @fixable 必须使用单引号，禁止使用双引号 double 双引号 single 单引号 backtick 反引号
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',

    // 'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      0,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off',
    'vue/attributes-order': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    camelcase: 'error', // 强制驼峰法命名
    'max-nested-callbacks': ['error', 3], // 回调嵌套深度
    'max-statements': [2, 20], // 函数最多可以有10个声明
    'no-empty': ['error', { allowEmptyCatch: true }], // 禁止空语句块
    'no-floating-decimal': 'error', // 禁止省略浮点数中的0 .5 3.
    'no-lone-blocks': 'error', // 禁止不必要的嵌套块
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'vue/html-self-closing': [
      1,
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
}
