# Software Design for ThreeSolidPrinciples.java

We will be splitting up the classes into the following portions:

* Main Method (main.java) - (Daniel Le)
* Interfaces (interfaces.java) - (Maojun Tian)
* Manager Class (manager.java) - (Jose Martinez)
* Worker Class (worker.java) - (Brian Chamblee)
* Robot Class (robot.java) - (Rolando Martinez)

## Main Method
The team member working on the main method will work implementing what the workable classes and managers will do.

## Interfaces
* Design the two interfaces: iWorkable and iFeedable. 
* By separating the two different types of interfaces, we follow the **Interface Separation Principle.** If we place the two interfaces in one interface, robots will implement the eat() method, which they don't need to use.
- The interface separation principle states that interfaces should be separated into many specific interfaces rather than one interface that has extraneous methods that a class may not need.

## Classes
* We will separate the three different classes as they have three similar, but different functions. The Robot may later on need to complete tasks that are tedious but able to be automated, while normal workers may work on tasks that need a more "human touch". By following the **Single Responsibility Principle** we split up the classes, so we are not limited to only one type of work.

* We also follow the **Open Close Principle** by providing three base classes which can then later be extended/inherited. The Open Close Principle states that a design should be open to extension, but closed to modification.

### Manager Classes
* Implements the iFeedable and iWorkable interfaces.
* Methods: manage(), and setWorker()

### Worker Classes
* Implements the iFeedable and iWorkable interfaces.
* Methods: eat() and work()
* SuperWorker extends Worker and implements iWorkable

### Robot Classes
* Implements the iWorkable interfaces.
* Methods: work()
