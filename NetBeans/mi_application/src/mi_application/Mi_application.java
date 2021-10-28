package mi_application;

public class Mi_application {

    public static void main(String[] args) {
        
        Juego jugador = new Juego(0, 3, "ak47", "Juan", "Netbeans");        
        Juego jugador1 = new Juego(0, 3, "ak47", "Pedro", "Netbeans");

        
        System.out.println(jugador.personaje);        
        System.out.println(jugador1.personaje);        
        System.out.println(jugador1.mostrar_vidas());
    }
}