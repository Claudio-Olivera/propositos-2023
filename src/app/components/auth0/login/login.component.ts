import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private readonly supabase: SupabaseService) {}
  session = this.supabase.session
  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session))

  }

}
// lo mas probable es que esta logica la maneje un servicio y se utilize eso para manejar las rutas