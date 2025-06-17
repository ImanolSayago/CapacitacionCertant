import { inject } from "@angular/core"
import { AdminService } from "../../admin/core/services/admin.service"
import { Router } from "@angular/router";


export const authGuardFn= ()=>
{
    const authService = inject(AdminService);

    const rutas = inject(Router);

    if(authService.getIsLoggedIn() || localStorage.getItem("token"))
    {
        localStorage.setItem("token","123.123.123");
        return true;
    }

    else
    {
        localStorage.removeItem("token");
        rutas.navigate(["login"]);
        return false;
    }
}