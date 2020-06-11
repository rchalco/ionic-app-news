import {Component, OnInit} from '@angular/core';
import {NoticasService} from '../../services/noticas.service';
import {Article} from "../../interfaces/interfaces";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    noticias: Article[] = [];

    constructor(private noticiasServices: NoticasService) {

    }

    ngOnInit() {
        this.noticiasServices.getTopHeadLines().subscribe(res =>{
            this.noticias.push(...res.articles);
            console.log('noticias', res)
        })
    }
}
