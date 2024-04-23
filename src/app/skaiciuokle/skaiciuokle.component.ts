import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skaiciuokle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skaiciuokle.component.html',
  styleUrl: './skaiciuokle.component.css'
})
export class SkaiciuokleComponent {
  public a:number|null=null;
  public b:number|null=null;
  public c:number|null=null;


  public area:number|null=null;
  public p:number|null=null;

  public skaiciuok(){
    if (this.a!=null && this.b!=null && this.c!=null){
      this.p=this.a+this.b+this.c;
      this.area=Math.sqrt(this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c));
      this.a=null;
      this.b=null;
      this.c=null;
    }
    
  }
}
