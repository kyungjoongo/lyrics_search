import {Component} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Http} from "@angular/http";
import {HttpProvider} from "../../providers/http/http";
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    url2 = 'https://api.genius.com/search?q=maroon5&access_token=bPuCVvNaVCChgy3QhJUtzgNJG-keARdsM7sjKUWCa7XMBHAZU9XlGRO1kPvtkioz';
    term = '';
    loader: any;


    constructor(public navCtrl: NavController, public domsanitizer: DomSanitizer
        , public httpprovider: HttpProvider
        , public loadingCtrl: LoadingController
        , public iab: InAppBrowser
        , public http: Http) {

    }

    resultList = [];


    doSearch() {


        this.getSongInfoList();

    }

    onKey() {

        this.getSongInfoList();
    }

    getSongInfoList() {

        let loader = this.loadingCtrl.create({
            content: 'Loading..'
        });

        loader.present().then(() => {
            this.httpprovider.getSongInfoList(this.term).subscribe(response => {

                console.log(response.response.hits);

                //alert(response.response.hits.length)

                this.resultList = response.response.hits;

                loader.dismiss();

            })

        })


    }

    goLyrics(url) {

        /*window.open(url, '_selft');*/

        const browser = this.iab.create(url, '_blank', 'location=no,toolbar=no');
    }


}
