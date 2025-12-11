/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';

/**
 * Define Themes
 *
 * area: area, one of (frontend|adminhtml|doc),
 * name: theme name in format Vendor/theme-name,
 * locale: locale,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */
module.exports = {
    blank: {
        area: 'frontend',
        name: 'Magento/blank',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },
    backend: {
        area: 'adminhtml',
        name: 'Magento/backend',
        locale: 'en_US',
        files: [
            'css/styles-old',
            'css/styles'
        ],
        dsl: 'less'
    },
    default: {
        area: 'frontend',
        name: 'Magsite/default',
        locale: 'en_GB',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },
    uk: {
        area: 'frontend',
        name: 'Magsite/uk',
        locale: 'en_GB',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },
    fr: {
        area: 'frontend',
        name: 'Magsite/fr',
        locale: 'en_GB',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },
    us: {
        area: 'frontend',
        name: 'Magsite/us',
        locale: 'en_GB',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    }
};
