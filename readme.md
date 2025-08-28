1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2.How do you create and insert a new element into the DOM?
3.What is Event Bubbling and how does it work?
4.What is Event Delegation in JavaScript? Why is it useful?
5.What is the difference between preventDefault() and stopPropagation() methods?

1 No answer:
------------
getElementById found a unique id from code and return a single element.
getElementByClassName found the 1st class of given className from code and return this element.
getElementsByClassName found all the classes of given className from code and return a collection of elements.
querySelector found the 1st element in this of given className,Idname or Tagname from code and return this element.
querySelectorAll found all the elements of given className,Idname or Tagname from code and return a collection of elements.

2 No answer:
------------
let newElm = document.createElement("div");
newElm.innerHTML = "<h1>Hello</h1>";
document.body.appendChild(newElm);

3 No answer:
------------
Event bubbling is the process of an event in the DOM where when an event occurs on a child element, it automatically "bubbles up" to its parent element.

4 No answer:
------------
Event Delegation is a powerful technique in JavaScript where we apply event handlers to many child elements at once, instead of their parent element.

Its usefull because it allows us to handle events on multiple elements without having to add an event listener to each element.

5 No answer:
------------
preventDefault() is a method in JavaScript that is used to prevent the default action of an event from occurring.
stopPropagation() is a method in JavaScript that is used to stop the event from propagating to other elements.Its stops the event from bubbling up or propagating to parent elements.

