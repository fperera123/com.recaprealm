'use strict';

/**
 * universal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::universal.universal');

module.exports = createCoreController('api::universal.universal', ({ strapi }) => ({
    async findOne(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::universal.universal', {
            ...query,
            populate: {
                'slices': {
                    populate: {
                        titleParagraph: {
                            populate: '*',
                        },
                        titleParagraphImage: {
                            populate: '*',
                        },
                        contentWithImageAndList: {
                            populate: '*',
                            titleMarkdownImage: {
                                populate: '*',
                            }
                        }
                    }
                },
                ogImage: {
                    populate: '*',
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
