import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AnnouncementsWebPartStrings';
import Announcements from './components/Announcements';
import { IAnnouncementsProps } from './components/IAnnouncementsProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
export interface IAnnouncementsWebPartProps {
  listName: string;
}

export default class AnnouncementsWebPart extends BaseClientSideWebPart<IAnnouncementsWebPartProps> {

  protected onInit(): Promise<void> {
    const siteUrl = this.context.pageContext.web.absoluteUrl;
    SPComponentLoader.loadCss(siteUrl+'/SiteAssets/css/main.css');
    SPComponentLoader.loadCss(siteUrl+'/SiteAssets/css/all.min.css');
    SPComponentLoader.loadCss(siteUrl+'/SiteAssets/css/print.css');
    SPComponentLoader.loadCss(siteUrl+'/SiteAssets/css/fonts.css');
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IAnnouncementsProps> = React.createElement(
      Announcements,
      {
        siteUrl: this.context.pageContext.web.absoluteUrl,
        listName: this.properties.listName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
