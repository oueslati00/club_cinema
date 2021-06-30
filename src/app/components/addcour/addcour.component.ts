import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {FormationService} from '../../layouts/admin-layout/_service/formation.service';
import { BsModalRef, BsModalService } from  'ngx-bootstrap/modal/';

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Chapter List</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="table-responsive">
        <table class="table align-items-center table-flush">
          <thead class="thead-light">
          <tr>
            <th scope="col">Cours Name</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">
              <div class="media align-items-center">

                <div class="media-body">
                  <span class="mb-0 text-sm">name</span>
                </div>
              </div>
            </th>
            <td>
              <button class="btn btn-secondary">update</button>
            </td>
            <td>
              <button class="btn btn-danger">remove</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
      <p><button class="btn btn-outline-primary" (click)="open()">add</button></p>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModal1Content {
  lessonItd: number ;
  chapter: any;
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private formationservice: FormationService) {
    this.modalService.activeInstances.subscribe((list) => {
      console.log(list.length);
      this.lessonItd = list.lessonItd;
    });
    this.chapter = formationservice.formation.chapter.find(x => x.id === this.lessonItd);

  }

  open() {
    this.modalService.open(NgbdModal2Content, {
      size: 'lg'
    });
  }
}
@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Cours details</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
      <h6 class="heading-small text-muted mb-4">Chapter Information</h6>
      <div class="pl-lg-4">
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group">
              <label class="form-control-label" for="input-name">name</label>
              <input type="text" id="input-name" class="form-control form-control-alternative" placeholder="cour name">
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ..."></textarea>
        </div>
        <div class="container">
          <ngx-file-drop dropZoneLabel="Drop files here" (onFileDrop)="dropped($event)"
                         (onFileOver)="fileOver($event)" (onFileLeave)="fileLeave($event)">
            <ng-template ngx-file-drop-content-tmp let-openFileSelector="openFileSelector">
              drag and drop the file
              <button type="button" (click)="openFileSelector()">Browse</button>
            </ng-template>
          </ngx-file-drop>
          <div class="upload-table">
            <table class="table">
              <thead>
              <tr>
                <th>Name</th>
              </tr>
              </thead>
              <tbody class="upload-name-style">
              <tr *ngFor="let item of files; let i=index">
                <td><strong>{{ item.relativePath }}</strong></td>
              </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModal2Content {
  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-addcour',
  templateUrl: './addcour.component.html',
  styleUrls: ['./addcour.component.css']
})
export class AddcourComponent  {
  @Input() lessonItd: number;

  constructor(private modalService: NgbModal ) {

  }
  open(lessonId) {
    const ModalRefer = this.modalService.open(NgbdModal1Content);
    ModalRefer.componentInstance.lessonItd = lessonId;

  }

}
