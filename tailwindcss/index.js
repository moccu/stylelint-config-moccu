'use strict';

module.exports = {
	extends: '@moccu/stylelint-config',
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'extends',
					'layer',
					'variants',
					'responsive',
					'screen'
				]
			}
		],
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
		'scss/at-rule-no-unknown': null
	}
}
 
