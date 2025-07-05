import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FileDownloadComponentComponent } from './file-download-component.component';

describe('FileDownloadComponentComponent', () => {
  let component: FileDownloadComponentComponent;
  let fixture: ComponentFixture<FileDownloadComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDownloadComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FileDownloadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 @Input() fileUrl!: string;
  @Input() fileName!: string;
  @Input() fileType: 'pdf' | 'excel' = 'pdf'; // por defecto

  downloading = false;

  downloadFile() {
    this.downloading = true;

    fetch(this.fileUrl)
      .then(response => {
        if (!response.ok) throw new Error('Error al descargar el archivo');
        return response.blob();
      })
      .then(blob => {
        const type = this.fileType === 'pdf' ? 'application/pdf' : 
                     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        const fileBlob = new Blob([blob], { type });
        saveAs(fileBlob, this.fileName);
      })
      .catch(error => {
        console.error('Error al descargar archivo:', error);
      })
      .finally(() => {
        this.downloading = false;
      });
  }

});
