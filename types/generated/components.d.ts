import type { Schema, Struct } from '@strapi/strapi';

export interface BodyContentBodyContent extends Struct.ComponentSchema {
  collectionName: 'components_body_content_body_contents';
  info: {
    displayName: 'bodyContent';
  };
  attributes: {};
}

export interface BodyContentQuote extends Struct.ComponentSchema {
  collectionName: 'components_body_content_quotes';
  info: {
    displayName: 'quote';
    icon: 'quote';
  };
  attributes: {
    photo: Schema.Attribute.Media<'images'>;
    phrase: Schema.Attribute.Blocks;
  };
}

export interface BodyContentRichText extends Struct.ComponentSchema {
  collectionName: 'components_body_content_rich_texts';
  info: {
    displayName: 'richText';
    icon: 'medium';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface EventEvent extends Struct.ComponentSchema {
  collectionName: 'components_event_events';
  info: {
    displayName: 'event';
  };
  attributes: {
    city: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    ticket: Schema.Attribute.String;
    venue: Schema.Attribute.String;
  };
}

export interface SocialMediaSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_social_media_social_medias';
  info: {
    displayName: 'socialMedia';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    tiktok: Schema.Attribute.String;
    x: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface TourEvent extends Struct.ComponentSchema {
  collectionName: 'components_tour_events';
  info: {
    displayName: 'event';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'body-content.body-content': BodyContentBodyContent;
      'body-content.quote': BodyContentQuote;
      'body-content.rich-text': BodyContentRichText;
      'event.event': EventEvent;
      'social-media.social-media': SocialMediaSocialMedia;
      'tour.event': TourEvent;
    }
  }
}
