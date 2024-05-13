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
		'no-descending-specificity': null,
		'scss/at-rule-no-unknown': null
	}
}
 
