import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

    constructor(public http: Http) {
        console.log('Hello HttpProvider Provider');
    }

    youtube_api_key = 'AIzaSyCUMLRaMiBgIcQiOwR--735jG-Dhgvg8B8';


    access_token='bPuCVvNaVCChgy3QhJUtzgNJG-keARdsM7sjKUWCa7XMBHAZU9XlGRO1kPvtkioz&q';

    url2 = 'https://api.genius.com/search?access_token=bPuCVvNaVCChgy3QhJUtzgNJG-keARdsM7sjKUWCa7XMBHAZU9XlGRO1kPvtkioz&q='

    getSongInfoList(term) {

        return this.http.get(this.url2 + term).map(response => {

            return response.json();
        })
    }

    getListVideos(listId) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.youtube_api_key + '&playlistId=' + listId + '&part=snippet,id&maxResults=20')
            .map((res) => {
                return res.json()['items'];
            })
    }


}
