import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { IUrl } from '../../interfaces/interfaces';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent {

  public inputControl: FormControl = new FormControl();
  public shortUrl: string = '';

  constructor(
    private httpService: HttpService
  ) { }

  public onSubmit(inputValue: string): void {
    this.httpService.getShortUrl(inputValue)
      .subscribe((data: IUrl) => {
        this.shortUrl = data.shortUrl;
      },
    );
  }
}
