import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";
import {HttpProvider} from "../../providers/http/http";
import {InAppBrowser} from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
    selector: 'page-video-list',
    templateUrl: 'video-list.html',
})


export class VideoListPage {

    apiKey: string = 'AIzaSyCUMLRaMiBgIcQiOwR--735jG-Dhgvg8B8';
    playlists: any;
    title: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider: HttpProvider
        , private youtube: YoutubeVideoPlayer, private plt: Platform, private   iab: InAppBrowser) {

        var playListId = this.navParams.get("playListId");

        let _paylistId = 'PL7MQjbfOyOE0nisdJuVQfuyV2GTYZze59';
        this.title = this.navParams.get("title");
        this.httpProvider.getListVideos(_paylistId).subscribe(response => {
            this.playlists = response;
            console.log(response);
        })


    }

    isEmptyObject(obj) {
        return (obj && (Object.keys(obj).length === 0));
    }


    openVideo(video) {



        /*if (this.plt.is('cordova')) {

            alert(video.snippet.resourceId.videoId );
            this.youtube.openVideo(video.snippet.resourceId.videoId);
        } else {*/
            //window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
            var browser = this.iab.create('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId, '_blank', 'location=no,toolbar=no');
        //}
    }

    openVideo2(list){
        /*var url = 'https://www.googleapis.com/youtube/v3/search?q=';*/

        let _url2= 'https://www.googleapis.com/youtube/v3/search?' +
                    'part=snippet\n' +
                    '&order=viewCount\n' +
                    '&q=skateboarding+dog\n' +
                    '&type=video\n' +
                    '&videoDefinition=high'+
                    '&apiKey='+ this.apiKey;


        var browser = this.iab.create(_url2, '_blank', 'location=no,toolbar=no');
    }

}
