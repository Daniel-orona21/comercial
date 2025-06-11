import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesYpermisosComponent } from './pages/roles-ypermisos/roles-ypermisos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { AlmacenesComponent } from './pages/almacenes/almacenes.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { DescuentosComponent } from './pages/descuentos/descuentos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { OrdenesDeCompraComponent } from './pages/ordenes-de-compra/ordenes-de-compra.component';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { ReportesComponent } from './pages/reportes/reportes.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'app', component: LayoutComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'dashboard', component: DashboardComponent},
        { path: 'usuarios', component: UsuariosComponent },
        { path: 'roles', component: RolesYpermisosComponent },
        { path: 'proveedores', component: ProveedoresComponent },
        { path: 'sucursales', component: SucursalesComponent },
        { path: 'almacenes', component: AlmacenesComponent },
        { path: 'categorias', component: CategoriasComponent },
        { path: 'productos', component: ProductosComponent },
        { path: 'servicios', component: ServiciosComponent },
        { path: 'paquetes', component: PaquetesComponent },
        { path: 'descuentos', component: DescuentosComponent },
        { path: 'inventario', component: InventarioComponent },
        { path: 'pagos', component: PagosComponent },
        { path: 'ordenes', component: OrdenesDeCompraComponent },
        { path: 'facturacion', component: FacturacionComponent },
        { path: 'home', component: HomeComponent },
        { path: 'reportes', component: ReportesComponent },
    ] },
    { path: '**', redirectTo: '' }
];
