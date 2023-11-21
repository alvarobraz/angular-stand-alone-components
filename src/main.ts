import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';

// Components
import { AppComponent } from './app/pages/app.component';

// Router
import { AppRoutingModule } from './app/pages/app-routing.module';

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule)
  ]
}).catch(err => console.error(err));
