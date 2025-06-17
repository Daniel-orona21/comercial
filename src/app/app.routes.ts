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
import { GeneralComponent } from './pages/inventario/general/general.component';
import { EntradasComponent } from './pages/inventario/entradas/entradas.component';
import { SalidasTraspasosComponent } from './pages/inventario/salidas-traspasos/salidas-traspasos.component';
import { RegistrarOrdenComponent } from './pages/ordenes-de-compra/registrar-orden/registrar-orden.component';
import { EditarOrdenComponent } from './pages/ordenes-de-compra/editar-orden/editar-orden.component';
import { CitasComponent } from './pages/citas/citas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ExpedienteComponent } from './pages/expediente/expediente.component';
import { PuntoDeVentaComponent } from './pages/punto-de-venta/punto-de-venta.component';
import { ComisionesComponent } from './pages/comisiones/comisiones.component';
import { NotasDeCreditoComponent } from './pages/notas-de-credito/notas-de-credito.component';
import { DescuentosPromocionesComponent } from './pages/descuentos-promociones/descuentos-promociones.component';
import { FacturasComponent } from './pages/facturas/facturas.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'app', component: LayoutComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'dashboard', component: DashboardComponent},
        { path: 'usuarios', component: UsuariosComponent },
        { path: 'roles', component: RolesYpermisosComponent },
        { path: 'roles-y-permisos', component: RolesYpermisosComponent },
        { path: 'roles-y-permisos/crear', loadComponent: () => import('./pages/roles-ypermisos/crear-rol/crear-rol.component').then(m => m.CrearRolComponent) },
        { path: 'proveedores', component: ProveedoresComponent },
        { path: 'sucursales', component: SucursalesComponent },
        { path: 'almacenes', component: AlmacenesComponent },
        { path: 'categorias', component: CategoriasComponent },
        { path: 'productos', component: ProductosComponent },
        { path: 'servicios', component: ServiciosComponent },
        { path: 'paquetes', component: PaquetesComponent },
        { path: 'descuentos', component: DescuentosComponent },
        { 
            path: 'inventario', 
            component: InventarioComponent,
            children: [
                { path: '', redirectTo: 'general', pathMatch: 'full' },
                { path: 'general', component: GeneralComponent },
                { path: 'entradas', component: EntradasComponent },
                { path: 'salidas-traspasos', component: SalidasTraspasosComponent }
            ] 
        },
        { path: 'pagos', component: PagosComponent },
        { path: 'ordenes', component: OrdenesDeCompraComponent },
        { path: 'ordenes/registrar', component: RegistrarOrdenComponent },
        { path: 'ordenes/editar/:id', component: EditarOrdenComponent },
        { path: 'facturacion', component: FacturacionComponent },
        { path: 'reportes', component: ReportesComponent },
        { path: 'citas', component: CitasComponent },
        { path: 'clientes', component: ClientesComponent },
        { path: 'expediente', component: ExpedienteComponent },
        { path: 'puntos-de-venta', component: PuntoDeVentaComponent },
        { path: 'comisiones', component: ComisionesComponent },
        { path: 'notas-de-credito', component: NotasDeCreditoComponent },
        { path: 'descuentos-y-promociones', component: DescuentosPromocionesComponent },
        { path: 'facturas', component: FacturasComponent },
        
    ] },
    { path: '**', redirectTo: '' }
];
