import {Component as OriginalDecorator, ComponentDecorator, ChangeDetectionStrategy, Type, ViewEncapsulation} from 'angular2/core';

export const Component = (metadata: {
    selector?: string,
    inputs?: string[],
    outputs?: string[],
    properties?: string[],
    events?: string[],
    host?: {[key: string]: string},
    providers?: any[],
    exportAs?: string,
    moduleId?: string,
    viewProviders?: any[],
    queries?: {[key: string]: any},
    changeDetection?: ChangeDetectionStrategy,
    templateUrl?: string,
    template?: string,
    styleUrls?: string[],
    styles?: string[],
    directives?: Array<Type | any[]>,
    pipes?: Array<Type | any[]>,
    encapsulation?: ViewEncapsulation
  } = {}) => {
  if (typeof __moduleName === 'undefined' && typeof module === 'undefined') {
    throw new Error('Only SystemJS and CommonJS are supported.');
  }
  metadata.moduleId = typeof __moduleName === 'undefined' ? module.id : __moduleName;
  return OriginalDecorator(metadata);
};

