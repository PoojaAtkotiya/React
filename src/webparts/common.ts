import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import axios from 'axios';
import { ItemAddResult, Web } from "sp-pnp-js";



export default class Common {

  public getMonthName(month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return monthNames[month];
  }

  public getDataFromList(Url, listName, query, method): Promise<any> {
    var url = null;
    if (query == null)
      url = Url + `/_api/web/lists/GetByTitle('` + listName + `')/items`;
    else
      url = Url + `/_api/web/lists/GetByTitle('` + listName + `')/items` + query;
    return axios.get(url)
      .then(res => {
        if (res.data.value != undefined && res.data.value != null) {
          return res;
        }
      }).catch(error => {
        this.SaveErrorInList(Url, method, error);
      });
  }

  public getchoices(siteAbsoluteUrl: string, listname: string, columnname: string): Promise<any> {
    let url = `${siteAbsoluteUrl}/_api/web/lists/getbytitle('${listname}')/fields?$filter=EntityPropertyName eq '${columnname}'`;
    // return fetch(url, { credentials: 'same-origin', headers: { Accept: 'application/json;odata=verbose' } }).then((response) => {
    //   return response.json();
    // }, (errorFail) => {
    //   console.log("error");
    // }).then((responseJSON) => {
    //   return responseJSON.d.results[0]["Choices"].results;
    // }).catch((response: SPHttpClientResponse) => {
    //   return null;
    // });

    return axios.get(url)
      .then(res => {
        if (res.data.value != undefined && res.data.value != null) {
          return res.data.value[0].Choices;
        }
      }).catch(error => {
        //this.SaveErrorInList(url, method, error);
      });

  }
  public SaveErrorInList(Url, methodName, activityoccur) {
    let web = new Web(Url);
    web.lists.getByTitle('ErrorLog').items.add({
      Title: methodName,
      Description: String(JSON.stringify(activityoccur))
    }).then((result: ItemAddResult) => {
      console.log("Error Log saved successfully");

    }).catch(error => {
      console.log("error while adding an Error Log");
    });
  }

  public truncate(input, count) {
    if (input.length > count)
      return input.substring(0, count) + '...';
    else
      return input;
  };
}