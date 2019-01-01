import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { RoutegaurdService } from './routegaurd.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { GalleryModule } from './gallery/gallery.module';
import { NotfoundModule } from './notfound/notfound.module';
import { ClientsModule } from './clients/clients.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { PricingModule } from './pricing/pricing.module';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent, outlet: 'popup'  },
  { path: 'about', loadChildren: () => AboutModule },
  { path: 'services', loadChildren: () => ServicesModule },
  { path: 'testimonials', loadChildren: () => TestimonialModule },
  { path: 'gallery', loadChildren: () => GalleryModule },
  { path: 'clients', loadChildren: () => ClientsModule },
  { path: 'pricing', loadChildren: () => PricingModule },
  { path: 'subscribe', component: SubscribeComponent, outlet: 'popup' },
  { path: 'dashboard', loadChildren: () => UserDashboardModule, canActivate: [RoutegaurdService]   },
  { path: 'blog', component: BlogComponent, canActivate: [RoutegaurdService] },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'article-edit/:id', component: ArticleEditComponent, canActivate: [RoutegaurdService]  },
  { path: 'article-create', component: ArticleCreateComponent, canActivate: [RoutegaurdService]  },
  { path: '404', loadChildren: () => NotfoundModule },
  { path: '**', redirectTo: '/404' },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
