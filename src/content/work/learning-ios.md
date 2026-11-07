---
title: Learning iOS Development
date: "2017-05-22"
kind: writing
dek: An advanced iOS class with no lectures, a Christmas of Swift, and the stylist half of Snipbooks.
---

Last semester I has an open class to take so I was looking through what was available, and I found one about advanced iOS programming. The class had two parts, a fall one that focused on more fundamentals and a winter one that was supposed to be more advanced. Though you could take either of them at any point. It was technically a class for 4th year undergraduates but I decided I was ready for it. So, over the Christmas break leading up to the semester I read as much as I could to try and prepare myself. I read through all the swift [documentation](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/) and I read cover to cover a [book](https://www.amazon.com/iOS-Programming-Ranch-Guide-Guides/dp/0134682335) which I would recommend. As well I went through and watched most of the [Stanford Course](https://itunes.apple.com/us/course/developing-ios-10-apps-with-swift/id1198467120) on iOS programming. So, by the time the class started I felt I was very prepared to keep up with everyone older than me.

When the class finally started I quickly found all my preparation to be very important because the professor taught no lectures. The lecture time was for students to give presentations and for presentations from outside professionals. The first lecture there were presenters from many different groups such as the Faculty of Science, a teaching lab for medical students and a startup company focusing on medical/health apps. We had the choice of working either with one of the companies or trying to create one of our own ideas. After much discussion, our group decided on going alone and to try and start something different. This was mostly due to our want for creative freedom as well as the ability to have full ownership over the intellectual property at the end.

Besides the creation of the app we were also required to do an hour-long presentation on a relevant topic for the class. We chose to do ours on back-end services for apps because it’s something my group didn’t have a large background in. Our presentation focused mostly on the offerings from Amazon AWS and Google’s Firebase. By the end, we had a strong knowledge of the API’s required to use both as well as the basic offerings of the services. We found Amazons API to be generally harder to work with than Firebase’s because of poor documentation and outdated code examples. Amazon does have a larger ecosystem to work with though so there are tradeoffs on both sides.

The app idea had come from the way a specific salon was handling their bookings. They had all the bookings on a notebook in the salon and that was the only place the haircut bookings were held. We wanted to focus on creating an app that made it easier to handle the bookings and make the whole process easier for both the customer and salon. We decided to call it [Snipbooks](/work/snipbooks/) and more high level specifics are available on its project post.

<figure>
  <div class="frame">
    <img src="/images/snipbooksCal.jpeg" alt="Snipbooks stylist agenda for 12 April 2017, with one afternoon booking on a phone." width="750" height="1334" />
  </div>
  <figcaption>Stylist agenda</figcaption>
</figure>

After some white boarding sessions, we decided on the basic UI for the app and the visual style guide. We also decided who was doing what parts of the app. A major thing we realized early on was the lack of calendar components for iOS so we would have to make them all from scratch. My part of the app was the entire Stylist view of the system so my focus was showing the bookings in a calendar, allowing a stylist to approve booking requests and allowing them to update their work schedule and other logistical details.

I learned the most through building the app and trying to see what worked and what didn’t. The two biggest things to learn were the Swift language and the details of Xcode. Swift is a very intuitive language which I could pick up almost immediately with only a few struggles. The biggest of which being its handling of variable types. Swift allows variables to be “optional” which means that a variable is allowed have no value. You would define this by putting a question mark after the name when you define the variable.

```swift
var numberOfCats:int?
```

In this example I set the number of cats that a person owns to be an optional integer with value “nil”. I did this because the person has no cats now but might want cats in the future, so the variable can be nil or have a value later. Now if you want to use the variable you need to “Unwrap” the variable to see if It has a value or not. You can “Force Unwrap” the variable by using an “!”

```swift
numberOfCats! +=1
```

If the variable does not have a variable then the app will crash however, so this should be avoided. The proper way being to use a guard to error-check the variable unwrap.

```swift
guard let catNum = numberOfCats else {
    print("numberOfCats is null")
}
```

Now we have a variable called catNum that we can use that we know will always have a value.

Xcode I found to be mostly very intuitive. Being able to create the UI using Storyboards made making the interface very quick and simple. I could visually see where the components will be on the screen which is very helpful. Also, the way to connect the storyboard components to code was very simple. All you do is click and drag from the component to the code and create the variable you want in the code that will represent what is on the screen. My biggest problems lied with Apple’s auto layout which is their way of scaling the app for multiple screen sizes. Essentially what you did was set “constraints” which define how the component will act in different size environments. The problem with this being that a lot of the names were not very aligned with what the constraint was doing and it took a lot of wrangling to get it to exactly do what you want. Autolayout is something I want to spend more time learning in the future.

All in all though, I found the class I took to be super helpful to my programming in skills in general as well as helping improve my presenting skills. I now have the skills to make professional iOS apps and am more comfortable presenting what I have made to others. (Also fun fact, the person in the tropical shorts in the header photo is me)

<figure>
  <div class="frame">
    <img src="/images/snipbooksgroup.jpg" alt="A class group in a lecture room. Jason is the person in tropical shorts." width="775" height="360" />
  </div>
  <figcaption>The person in the tropical shorts is Jason</figcaption>
</figure>
