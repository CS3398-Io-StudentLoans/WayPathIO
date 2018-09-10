package ThreeSolidPrinciples;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;


class Manager {
/* implements the iFeedable interface
 * methods: eat(), manage(), setWorker()
 * 
 * Manager keeps in mind the singple responbilbity princple by only including responsiblilites that only a manger would have and not others that can be implemented 
 * worker
 * 
 * Manager class does not apply to the interface segregation principle
 * 
 * Manager classs keeps in mind the open/close principle since it will be made to allow extensions 
 */ 
	
    IWorkable worker;
	
    public void Manager() {

    }

    public void setWorker (IWorkable w){
        worker = w;
    }

    public void manage () {
        worker.work();
    }


}
