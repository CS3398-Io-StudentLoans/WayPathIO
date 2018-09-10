package ThreeSolidPrinciples;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;


/*Robot Classes
Implements the iWorkable interfaces.
Methods: work()
###
Single responsibility- the robot is now only responsible 
for robot instead of being part of another implimentation 
###					   
Interface segregation- does not apply
###
Open close- Robot will be open to extentions and will not need to be modifided from within.
*/
class Robot implements IWorkable{
    public void work() {
        // ....working
    }
}
