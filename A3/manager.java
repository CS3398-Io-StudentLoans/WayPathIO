package threesolid;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;

import threesolid.worker;
import threesolid.interfaces;
import threesolid.robot;

class Manager {
/* implements the iFeedable interface
 * methods: eat(), manage(), setWorker()
 * 
 * Manager keeps in mind the singple responbilbity princple by only including responsiblilites that only a manger would have and not others that can be implemented 
 * worker
 * 
 * Manager class does not apply to the interface segregation principle
 */ 
    public void Manager() {

    }

    public void setWorker (Workable w){
        worker = w;
    }

    public void manage () {
        worker.work();
        }


}