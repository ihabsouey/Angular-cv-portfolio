import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';
import { ExperienceService } from '../experience.service';
import { EducationService } from '../education.service';
import { CompetenceService } from '../competence.service';
import { LanguesService } from '../langues.service';
import { LoisirService } from '../loisir.service';
import { ThemePalette } from '@angular/material/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-second-cv-model',
  templateUrl: './second-cv-model.component.html',
  styleUrls: ['./second-cv-model.component.css'],
})
export class SecondCvModelComponent {
  urlLink: any = '';
  infosPerso: any[] = [];
  experiences: any[] = [];
  educations: any[] = [];
  competences: any[] = [];
  langueMaternelle: any = '';
  autresLangues: any[] = [];
  loisirs: any[] = [];

  // selon social media type de logo
  sm: any = '';
  @ViewChild('template') template!: ElementRef;
  color: ThemePalette;

  constructor(
    private userDataService: UserDataService,
    private img: ImageService,
    private experience: ExperienceService,
    private education: EducationService,
    private competence: CompetenceService,
    private langue: LanguesService,
    private loisir: LoisirService
  ) {}

  ngOnInit() {
    this.infosPerso = this.userDataService.getInfosPerso();
    this.experiences = this.experience.getExperiences();
    this.educations = this.education.getEducations();
    this.competences = this.competence.getCompetences();
    this.loisirs = this.loisir.loisirs;
    this.urlLink = this.img.getUrlLink();
    this.autresLangues = this.langue.getLAutres();
    this.langueMaternelle = this.langue.getLMaternelle();

    this.sm =
      this.infosPerso[0].socialMedia === 'in'
        ? 'bi bi-linkedin'
        : 'bi bi-github';
  }
  downloadCV() {
    const pdf = new jsPDF('p', 'pt', [1300, 500]);
    const content = this.template.nativeElement;

    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth() - 10;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      const margin = 5; // 5mm margin on each side
      const x = margin;
      const y = margin;
      const width = pdfWidth - margin * 2;
      const height = pdfHeight - margin * 2;
      pdf.addImage(imgData, 'PNG', x, y, width, height);
      pdf.save('cv.pdf');
    });
  }
}
