package threesolid;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;

import threesolid.interfaces;

/*
###
Worker class adheres to the Single Responsibility Principle because it only has one reason to change.
It has been seperated from the Manager and Robot classes because although they are similar in function
have different methods present in them which only apply to their classes in some cases.
By using the Single Responsibility Principle we split up the classes, so we are not limited to only one
type of work.

###
Worker class adheres to the Open Close Principle by providing base classes of Worker and SuperWorker
which can then later be extended/inherited.
The Open Close Principle states that a design should be open to extension, but closed to modification.

###
Interface Segregation Principle does not apply to this class
 */


class Worker implements IWorkable, IFeedable{
    public void work() {
        // ....working
    }

    public void eat() {
        //.... eating in launch break
    }
}

class SuperWorker IWorkable, IFeedable{
    public void work() {
        //.... working much more
    }

    public void eat() {
        //.... eating in launch break
    }
}
