
package mi_application;

public class Juego {
    
    public int puntos, vidas; /*Declarando las propiedades*/
    public String armas, personaje, enemigos; /*Declarando las propiedades*/
    
    Juego(int puntos, int vidas, String armas, String personaje, String enemigos)/* Constructor */ {
        this.puntos = puntos;
        this.vidas = vidas;
        this.armas = armas;
        this.personaje = personaje;
        this.enemigos = enemigos;
    }
    
    
    public String mostrar_vidas(){
        return "Tengo "+ this.vidas + " vidas restantes.";
    }
}