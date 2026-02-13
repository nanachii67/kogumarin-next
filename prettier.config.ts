import { type Config } from 'prettier';

const config: Config = {
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    semi: true,
    objectWrap: 'collapse',
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    importOrder: [
        '<BUILTIN_MODULES>',
        '<THIRD_PARTY_MODULES>',
        '^(?:react|next)(?:/(.*))?$',
        '^\.+\/(.*)$',
        '^@/(?:assets|app|components|hooks|layouts|lib|pages|styles|types|utils)/(.*)$',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};

export default config;
