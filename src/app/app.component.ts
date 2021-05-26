import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';

  k = 0;

  ngOnInit()
        {
            this.q();
            setInterval(() => {
                this.q(); 
                }, 50);
        }

  incc() {
    this.k++;
    (<HTMLInputElement>document.getElementById("a1")).value = this.k.toString();
  }


  q()
  {
      let t = (<HTMLInputElement>document.getElementById("pal")).value;
      if(t.length <= 0)
      {
          return false;
      }
      t = t.toLowerCase();
      for(var i = 0, j = t.length-1; i != j && i < j; i++, j--)
      {
          if(t[i] != t[j])
          {
            (<HTMLInputElement>document.getElementById("a2")).value = "False";
              return false;
          }
      }

      (<HTMLInputElement>document.getElementById("a2")).value = "True";

      return true
  }
}