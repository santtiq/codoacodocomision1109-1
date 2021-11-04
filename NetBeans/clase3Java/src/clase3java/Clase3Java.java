package clase3java;

import personal.Departamento;
import personal.Personal;


public class Clase3Java {
    public static void main(String[] args) {
       Personal persona = new Personal("Santi", "Quinteros", 25);
       persona.setSueldo(250000);
       
       Personal administrativo = new Personal("Juan", "Perez", 38);
       administrativo.setSueldo(80000);
       System.out.println("El sueldo del personal de administración es " + administrativo.getSueldo());

       
       Personal mantenimiento = new Personal("Pedro", "García", 32);
       mantenimiento.setSueldo(60000);
       System.out.println("El sueldo del personal de mantenimiento es " + mantenimiento.getSueldo());
       
       Departamento IT = new Departamento("Lucia", "Exposito", 32, "Desarrollo");
       IT.setSueldo(500000);
       System.out.println(IT.nombre + " esta ganando " +IT.getSueldo());
       IT.depto = "Gerencia General";
       System.out.println(IT.MostrarDatos());
    }
}