import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, Platform} from 'ionic-angular';
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
    term: String;

    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public httpProvider: HttpProvider
        , private youtube: YoutubeVideoPlayer
        , public loadingCtrl: LoadingController
        , private plt: Platform, private   iab: InAppBrowser) {

        var playListId = this.navParams.get("playListId");

        /*        this.getVideoListByTerm();*/


    }


    getVideoListByTerm() {


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




    openVideo(item) {

        /*if (this.plt.is('cordova')) {
            this.youtube.openVideo(item.id.videoId);
        } else {
            var browser = this.iab.create('https://www.youtube.com/watch?v=' + item.id.videoId, '_blank', 'location=no,toolbar=no');
        }*/

        var browser = this.iab.create('https://www.youtube.com/watch?v=' + item.id.videoId, '_blank', 'location=no,toolbar=no');
    }


    doSearch() {
        this.getVideoList();
    }

    onKey() {

        this.getVideoList();
    }

    getVideoList(){

        let loader = this.loadingCtrl.create({
            content: 'Loading videos..'
        });

        loader.present().then(()=>{

            this.httpProvider.getListBySearchTerm(this.term).subscribe(response => {
                this.playlists = response;

                loader.dismiss();
            })

        })
    }




    playVideo() {

        let playVideoId = 'fsbW4U2Mwfk';

        let url = 'https://www.youtube.com/watch?v=' + playVideoId;
    }

}
