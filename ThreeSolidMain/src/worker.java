package ThreeSolidPrinciples;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;


class Worker implements IWorkable, IFeedable{
    public void work() {
        // ....working
    }

    public void eat() {
        //.... eating in launch break
    }
}

class SuperWorker implements IWorkable, IFeedable{
    public void work() {
        //.... working much more
    }

    public void eat() {
        //.... eating in launch break
    }
}
