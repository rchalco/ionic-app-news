import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IonSegment} from '@ionic/angular';
import {NoticasService} from "../../services/noticas.service";
import {Article} from "../../interfaces/interfaces";

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, AfterViewInit {
    categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    noticias: Article[] = [];
    @ViewChild(IonSegment) segment: IonSegment;

    constructor(private noticasService: NoticasService) {

    }

    ngOnInit() {
    }

    private cargarNoticias(categoria: string) {
        this.noticasService.getTopHeadLinesByCategory(categoria)
            .subscribe(resul => {
                this.noticias.push(...resul.articles);
                console.log(resul);
            });

    }

    ngAfterViewInit() {
        this.segment.value = this.categorias[0];
        this.cargarNoticias(this.categorias[0]);
    }

    selectNoticias(event) {
        this.noticias = [];
        this.cargarNoticias(event.detail.value);
    }
}
