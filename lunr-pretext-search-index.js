var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-Math-Modeling",
  "level": "1",
  "url": "sec-Math-Modeling.html",
  "type": "Section",
  "number": "1.1",
  "title": "Mathematical Modeling",
  "body": " Mathematical Modeling  Differential equations (DEs) are used to mathematically model physical situations. The first example of using a differential equation to model real world situations is Newton's 2nd Law. Some other examples of differential equation models that you are probably familiar with.  Radioactive decay : The rate of decay of a radioactive substance is proportional to the amount of the substance. with solution    Projectiles : Motion of a particle under constant gravitational acceleration downwards with solution    Newton's Law of Cooling : The rate of change of the temperature of an object is proportional to the difference between its temperature and the temperature of its surroundings. with solution    Population : The rate of change of a population is proportional to the population. with solution    Logistic Population Model :  with solution    "
},
{
  "id": "sec-ODEs",
  "level": "1",
  "url": "sec-ODEs.html",
  "type": "Section",
  "number": "1.2",
  "title": "Ordinary Differential equations",
  "body": " Ordinary Differential equations  An ordinary differential equation consists of a real dependent variable, a real independent variable, and derivatives of the dependent variable with respect to the independent variable. It can be expressed in the implicit form. where is the dependent variable and is the independent variable. The normal form is obtained by solving for the highest derivative (if possible).  The order of a differential equation is the order of the highest derivative. The examples in the previous section were all first order except the projectile example.  A differential equation is linear if it is a linear function of the dependent variable and its derivatives. Otherwise it is nonlinear. All of the examples in the previous section are linear except for the Logistic model.  A differential equation is autonomous if the independent variable doesn't appear explicitly in the equation. All of the examples in the previous section are autonomous.   Here are some more complicated differential equation models  The Van der Pol equation : It describes the current in a certain type of electrical circuit. The dependent variable is and the independent variable is . It is second order, nonlinear, and autonomous   The Euler-Bernoulli equation : It describes the the deflection of a beam The dependent variable is the independent variable is . It is fourth order, linear and it isn't autonomous   The Schrodinger equation for the hydrogen atom  The dependent variable is and the independent variable is . It is second order, linear and not autonomous,   The Blasius equation It describes boundary layer flow of a fluid over a flat plate. The dependent variable is , the independent variable isn't given explicitly. The equation is third order, nonlinear, and autonomous   "
},
{
  "id": "sec-Explicit-Solutions",
  "level": "1",
  "url": "sec-Explicit-Solutions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Analytic solutions in explicit form",
  "body": " Analytic solutions in explicit form  An analytic or closed form solution to a differential equation is an expression relating the dependent and independent variables without derivatives, which when differentiated makes the differential equation an identity. Solutions can given in explicit form or in implicit form   If the differential equation is then an explicit solution of the equation makes an identity    The differential equation has a solution since So it satisfies the equation. is called a particular solution. The general solution to the equation is where is an arbitrary constant analogous to the when finding antiderivatives    "
},
{
  "id": "sec-Explicit-Solutions-4",
  "level": "2",
  "url": "sec-Explicit-Solutions.html#sec-Explicit-Solutions-4",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": "  The differential equation has a solution since So it satisfies the equation. is called a particular solution. The general solution to the equation is where is an arbitrary constant analogous to the when finding antiderivatives   "
},
{
  "id": "sec-Implicit-Solutions",
  "level": "1",
  "url": "sec-Implicit-Solutions.html",
  "type": "Section",
  "number": "1.4",
  "title": "Analytic solutions in implicit form",
  "body": " Analytic solutions in implicit form  To check whether an implicit function satisfies a differential equation we have to implicitly differentiate the function and solve for   are the partial derivatives of g, that is they are the usual derivatives with respect to the variable while considering all the other variables to be constant. The function will be a solution to the equation if    A closed form solution to the differential equation is given by since and    "
},
{
  "id": "sec-Implicit-Solutions-3",
  "level": "2",
  "url": "sec-Implicit-Solutions.html#sec-Implicit-Solutions-3",
  "type": "Example",
  "number": "1.4.1",
  "title": "",
  "body": " A closed form solution to the differential equation is given by since and   "
},
{
  "id": "sec-IVPs",
  "level": "1",
  "url": "sec-IVPs.html",
  "type": "Section",
  "number": "1.5",
  "title": "Initial Value Problems",
  "body": " Initial Value Problems  In applications of differential equations we are usually interested in finding solutions that satisfy another requirement called an initial condition. This has the effect of fixing the arbitrary constant in the general solution.  An initial value problem (IVP) consists of a differential equations together with a given initial value of the dependent variable. If we are using the IVP to model a physical situation, we want the solution to make sense. The mathematical issues that need to be addressed are    Existence : Does the solution exist?     Uniqueness : If a solution exists, is it unique?     Interval of existence : If a unique solution is found. For what values of the independent variable is the solution valid?      What can go wrong?    Existence Just as in the theory of algebraic equations, we are not guaranteed a solution to a given IVP. Sometimes it is clear the a solution cannot exist. For example. consider the IVP since substituting the initial condition into the right hand side of the equation implies is undefined   Uniqueness Sometimes there is more than one solution to a given IVP. Consider This has solutions of the form with arbitrary.   Interval of existence For some differential equations the interval of existence will depend on the initial conditions. The IVP The differential equation is undefined for , so depending on the position of the initial condition the possible intervals of existence are . A subtler problem occurs when the solution of the differential equation has a singularity. As an example the IVP has the solution since has vertical asymptotes at odd multiple of   "
},
{
  "id": "sec-Existence-Uniqueness",
  "level": "1",
  "url": "sec-Existence-Uniqueness.html",
  "type": "Section",
  "number": "1.6",
  "title": "An Existence and Uniqueness Theorem",
  "body": " An Existence and Uniqueness Theorem    Given the initial value problem    If is continuous in the open rectangle then the IVP has a solution in an open interval about the initial point .    If in addition the partial derivative is also continuous the solution is unique.   Notes   The theorem is a local existence theorem. It only guarantees a solution in a neighborhood of the initial point. It doesn't give any information about the interval of existence.    The theorem gives sufficient conditions for an solution to exist. There can be solutions to an IVP even if the function isn't continuous. has a solution even though is not continuous at     The theorem is also true if there are more than one dependent variable and all the partial derivatives with respect to the dependent variables are continuous. For example, given the IVP then if and are continuous at then a solution exists. If the partial derivatives are also continuous then the solution is unique.        Solve the differential equation For the initial conditions   Firstly and are continuous everywhere so a unique solution exists for any initial condition.  Separating the variables and integrating  (a) (b) (c) The problem goes back to separating the variables. If , dividing by is not allowed. We know there is a unique solution from the theorem. Substituting into the differential equation shows that that is a solution. is an example of a singular or equilibrium solution    Consider IVPs associated with the differential equation Clearly if the solutions will not exist. For , is continuous and are singular solutions, so a solution will exist for . For the partial derivative is continuous, but is undefined at . So there is a possibility of non uniqueness at those values.  Separating the variables and integrating Incorporating the initial condition gives For this becomes But is also a solution so there are at least two solutions hence non uniqueness.  The situation is actually worse. There are an infinite number of solutions. If , is negative so there is a choice between the singular solution and the sinusoidal solution. If the only possibility is the singular solution. For the situation is reversed, for there is only the singular solution and for there is a choice. Some of the possible solutions for the initial condition are graphed below.  (for accessibility)     "
},
{
  "id": "thm-",
  "level": "2",
  "url": "sec-Existence-Uniqueness.html#thm-",
  "type": "Theorem",
  "number": "1.6.1",
  "title": "",
  "body": "  Given the initial value problem    If is continuous in the open rectangle then the IVP has a solution in an open interval about the initial point .    If in addition the partial derivative is also continuous the solution is unique.   Notes   The theorem is a local existence theorem. It only guarantees a solution in a neighborhood of the initial point. It doesn't give any information about the interval of existence.    The theorem gives sufficient conditions for an solution to exist. There can be solutions to an IVP even if the function isn't continuous. has a solution even though is not continuous at     The theorem is also true if there are more than one dependent variable and all the partial derivatives with respect to the dependent variables are continuous. For example, given the IVP then if and are continuous at then a solution exists. If the partial derivatives are also continuous then the solution is unique.      "
},
{
  "id": "sec-Existence-Uniqueness-3",
  "level": "2",
  "url": "sec-Existence-Uniqueness.html#sec-Existence-Uniqueness-3",
  "type": "Example",
  "number": "1.6.2",
  "title": "",
  "body": " Solve the differential equation For the initial conditions   Firstly and are continuous everywhere so a unique solution exists for any initial condition.  Separating the variables and integrating  (a) (b) (c) The problem goes back to separating the variables. If , dividing by is not allowed. We know there is a unique solution from the theorem. Substituting into the differential equation shows that that is a solution. is an example of a singular or equilibrium solution  "
},
{
  "id": "sec-Existence-Uniqueness-4",
  "level": "2",
  "url": "sec-Existence-Uniqueness.html#sec-Existence-Uniqueness-4",
  "type": "Example",
  "number": "1.6.3",
  "title": "",
  "body": " Consider IVPs associated with the differential equation Clearly if the solutions will not exist. For , is continuous and are singular solutions, so a solution will exist for . For the partial derivative is continuous, but is undefined at . So there is a possibility of non uniqueness at those values.  Separating the variables and integrating Incorporating the initial condition gives For this becomes But is also a solution so there are at least two solutions hence non uniqueness.  The situation is actually worse. There are an infinite number of solutions. If , is negative so there is a choice between the singular solution and the sinusoidal solution. If the only possibility is the singular solution. For the situation is reversed, for there is only the singular solution and for there is a choice. Some of the possible solutions for the initial condition are graphed below.  (for accessibility)    "
},
{
  "id": "sec-Simple-Harmonic-Motion",
  "level": "1",
  "url": "sec-Simple-Harmonic-Motion.html",
  "type": "Section",
  "number": "1.7",
  "title": "Simple Harmonic Motion",
  "body": " Simple Harmonic Motion  We consider a particle of mass m attached to a spring.   (for accessibility)   Initially displace it an amount and let go. The independent variable will be time and the dependent variable will be the displacement .The initial conditions are . The particle will oscillate about the equilibrium ( ) position. To get a differential equation for we will use Newton's 2nd law For a spring the force is given by Hooke's law The differential equation is Considering the behavior of the particle leads to guessing a solution of the form   (for accessibility)   Substituting into the equation gives To find we use the initial condition Since the equation is second order, to get a unique solution, two initial conditions are required. By guessing to use the cosine we have automatically satisfied . Notice if you choose this also satisfies the DE. So the general solution has the form with arbitrary constants to be determined by the initial conditions  Is this solution unique? Yes, because we can replace the second order equation by the two first order equations The functions are continuous and the partial derivatives are continuous also, so by the theorem the solution exists and is unique.  "
},
{
  "id": "sec-Time-Only",
  "level": "1",
  "url": "sec-Time-Only.html",
  "type": "Section",
  "number": "2.1",
  "title": "Time Only Differential Equations",
  "body": " Time Only Differential Equations  The simplest type of differential equation is one where the derivative of the dependent variable depends only on the independent variable You have been solving these since your first calculus class. Using the fundamental theorem, the solution is These types of equations occur in physics, when the force is a function of time only. Newton's second law takes the form The velocity can be calculated by integration and the displacement can be obtained by another integration   A ball is thrown upwards at a speed . Neglecting air resistance, what is the maximum height the ball will reach? The displacement is (assuming that ) When the ball is at its maximum height the velocity is 0. The maximum height will be     "
},
{
  "id": "sec-Time-Only-2-6",
  "level": "2",
  "url": "sec-Time-Only.html#sec-Time-Only-2-6",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": " A ball is thrown upwards at a speed . Neglecting air resistance, what is the maximum height the ball will reach? The displacement is (assuming that ) When the ball is at its maximum height the velocity is 0. The maximum height will be   "
},
{
  "id": "sec-Separable",
  "level": "1",
  "url": "sec-Separable.html",
  "type": "Section",
  "number": "2.2",
  "title": "Separable Equations",
  "body": " Separable Equations  The next class of differential equations that can be readily solved are the separable ones. They have the form The dependent and independent variables can be separated and each side of the equation can be integrated which is an implicit solution of the differential equation.  There is also the possibility of equilibrium solutions. If is a constant solution of then a solution to the differential equation is    Find the general solution to the differential equation There are no problems with existence or uniqueness and there is an equilibrium solution . Separating the variables and integrating So the solution is     Solve the initial value problem There is an equilibrium solution, . This equation is separable  This gives Integrating Using the initial condition Since the initial condition is then . Combing the logs    "
},
{
  "id": "sec-Separable-4",
  "level": "2",
  "url": "sec-Separable.html#sec-Separable-4",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": " Find the general solution to the differential equation There are no problems with existence or uniqueness and there is an equilibrium solution . Separating the variables and integrating So the solution is   "
},
{
  "id": "sec-Separable-5",
  "level": "2",
  "url": "sec-Separable.html#sec-Separable-5",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": " Solve the initial value problem There is an equilibrium solution, . This equation is separable  This gives Integrating Using the initial condition Since the initial condition is then . Combing the logs   "
},
{
  "id": "sec-Population-Models",
  "level": "1",
  "url": "sec-Population-Models.html",
  "type": "Section",
  "number": "2.3",
  "title": "Population Models",
  "body": " Population Models   Exponential Growth  The simplest population model states that the rate of growth of a population is proportional to the population. The associated differential equation is It is separable Using the initial condition gives . An the solution is It isn't a good for long term behavior as the population will become unbounded eventually   A bacterial colony is found to have 2000 individuals after 2 hours. After 5 hours the colony has grown to 54000 individuals  (a) What was the initial population?  (b) At what time will the colony contain a million individuals?   Dividing        The Logistic equation  A Belgian biologist called Verhulst proposed a modification of exponential growth where are given constants. The idea is that for small values of the population grows exponentially. As increases there is a resistance to growth modeled by the term. This is an attempt to take into account the struggle for resources as the population increases.  The equation is separable Using partial fractions gives Integrating gives The initial condition implies that Integrating leads to Solving for gives The constant is called the growth rate by analogy with the simple exponential growth. is called the carrying capacity since   Here are some solutions to    (for accessibility)     The Extinction-Explosion (Doomsday) Model  A slightly different model is given by the DE A similar analysis leads to the expression for as If then If then and the denominator becomes zero at a finite value of    Here are some solutions to    (for accessibility)    "
},
{
  "id": "subsec-Exponential-3",
  "level": "2",
  "url": "sec-Population-Models.html#subsec-Exponential-3",
  "type": "Example",
  "number": "2.3.1",
  "title": "",
  "body": " A bacterial colony is found to have 2000 individuals after 2 hours. After 5 hours the colony has grown to 54000 individuals  (a) What was the initial population?  (b) At what time will the colony contain a million individuals?   Dividing     "
},
{
  "id": "sec-gravity-air-resistance",
  "level": "1",
  "url": "sec-gravity-air-resistance.html",
  "type": "Section",
  "number": "2.4",
  "title": "Motion under gravity with air resistance",
  "body": " Motion under gravity with air resistance  If a particle of mass m is falling through a fluid, it experiences an upward resistive force exerted by the fluid in addition to the force of gravity. Let us assume that the force depends on the particle's velocity. Physical considerations would lead to the assumption the resistive force will increase as the speed increases. That implies Taking the velocity to be positive downward, Newton's second law gives This is a separable DE with solution Unless the form of the resistance is given this isn't very useful, but some qualitative conclusions can be drawn from the differential equation itself.  Suppose the initial velocity satisfies , then the DE implies and must increase but so will . This means the rate of change of , , decreases until . The velocity that satisfies is called the terminal velocity.  If on the other hand the initial velocity satisfies then the DE implies that and decreases to the terminal velocity   (for accessibility)     Maximum height with linear air resistance   The differential equation for a particle moving upward with linear air resistance is To simplify the algebra let kg, m\/s, m\/s , and , The DE becomes Separating the variables and integrating   The particle reaches maximum height when  The maximum height is given by integrating the velocity compared to the value for no air resistance    "
},
{
  "id": "sec-gravity-air-resistance-6",
  "level": "2",
  "url": "sec-gravity-air-resistance.html#sec-gravity-air-resistance-6",
  "type": "Example",
  "number": "2.4.1",
  "title": "",
  "body": "  Maximum height with linear air resistance   The differential equation for a particle moving upward with linear air resistance is To simplify the algebra let kg, m\/s, m\/s , and , The DE becomes Separating the variables and integrating   The particle reaches maximum height when  The maximum height is given by integrating the velocity compared to the value for no air resistance   "
},
{
  "id": "sec-Leaky-Vessels",
  "level": "1",
  "url": "sec-Leaky-Vessels.html",
  "type": "Section",
  "number": "2.5",
  "title": "Leaky Vessels",
  "body": " Leaky Vessels  Consider a cylindrical vessel with constant cross sectional area , partially filled with water, with a hole of area in its base. What we would like to do is calculate the height of water in the vessel as a function of time.   (for accessibility)   The velocity of the water leaving the vessel is given by Torricelli's Law The volume and the rate of change of volume will be given by On the other hand the amount of water leaving the vessel will be the area of the hole times the speed of the water. thus The equation is separable let then If then and the vessel is empty when .     The Clepsydra   In the ancient world they used water flowing from a vessel as a clock. In particular they wanted the height of the water to drop at a constant rate so the current height would give a measure of the time.  Suppose the vessel has a cross sectional area at a height then the volume of fluid with height will be given by Then using the chain rule Assuming the vessel is a solid of revolution, the cross sections will be circles.   (for accessibility)   If the equation of the curve is then What shape should the vessel be so that Using Torricelli's law again we have then or    "
},
{
  "id": "sec-Leaky-Vessels-5",
  "level": "2",
  "url": "sec-Leaky-Vessels.html#sec-Leaky-Vessels-5",
  "type": "Example",
  "number": "2.5.1",
  "title": "",
  "body": "  The Clepsydra   In the ancient world they used water flowing from a vessel as a clock. In particular they wanted the height of the water to drop at a constant rate so the current height would give a measure of the time.  Suppose the vessel has a cross sectional area at a height then the volume of fluid with height will be given by Then using the chain rule Assuming the vessel is a solid of revolution, the cross sections will be circles.   (for accessibility)   If the equation of the curve is then What shape should the vessel be so that Using Torricelli's law again we have then or   "
},
{
  "id": "sec-Integrating-Factor",
  "level": "1",
  "url": "sec-Integrating-Factor.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Integrating Factor Method",
  "body": " The Integrating Factor Method  The general form of a first order linear differential equation is If and are continuous functions, our theorem guarantees that a solution to the equation exits and it is unique since is continuous and is also continuous.  To solve Multiply the differential equation with a function , the integrating factor, with the property that Since all the terms are multiplied by , without loss of generality we can choose . Multiplying the equation by  Integrating and dividing by gives the solution    The differential equation has integrating factor and the solution is     Solve the differential equation The integrating factor is and the solution is Calculating the integral involves integration by parts, which is very common in the solution of first order linear differential equations.     Now do another integration by parts  Solving for gives   So the solution to the differential equation is    "
},
{
  "id": "sec-Integrating-Factor-4",
  "level": "2",
  "url": "sec-Integrating-Factor.html#sec-Integrating-Factor-4",
  "type": "Example",
  "number": "3.1.1",
  "title": "",
  "body": " The differential equation has integrating factor and the solution is   "
},
{
  "id": "sec-Integrating-Factor-5",
  "level": "2",
  "url": "sec-Integrating-Factor.html#sec-Integrating-Factor-5",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": " Solve the differential equation The integrating factor is and the solution is Calculating the integral involves integration by parts, which is very common in the solution of first order linear differential equations.     Now do another integration by parts  Solving for gives   So the solution to the differential equation is   "
},
{
  "id": "sec-Superposition",
  "level": "1",
  "url": "sec-Superposition.html",
  "type": "Section",
  "number": "3.2",
  "title": "Superposition",
  "body": " Superposition  The reason that the linear differential equations are expressed in the form above rather than as is that if we define the function by then this the defining property of a linear transformation.  Given a linear DE The associated homogeneous equation is If is any solution of the DE and is a solution to the associated homogeneous equation then so the solution to the original non homogeneous differential equation consists of two parts: a particular solution plus an arbitrary solution of the associated homogeneous equation. If an arbitrary solution to the homogeneous equation is added to any solution to the DE you get another solution to the DE. This property is called superposition. Superposition is a property of all linear equations.  The solution to a linear differential equation is where the arbitrary constant from the antiderivative is included. A solution to the homogeneous equation is . The function is the arbitrary solution to the homogeneous equation.  In the first example in the previous section. The solution to was found to be   "
},
{
  "id": "sec-Electrical-Circuits",
  "level": "1",
  "url": "sec-Electrical-Circuits.html",
  "type": "Section",
  "number": "3.3",
  "title": "Electrical Circuits",
  "body": " Electrical Circuits  Electrical circuits are a fertile area for linear differential equations. For example consider the circuit   (for accessibility)   \\begin{center} The voltages across the resistor and inductor are given in terms of the current  Kirchhoff’s law is that the voltages around the circuit add to zero which leads to the first order DE This is a linear equation with integrating factor So the current is    If a constant and then using the initial condition gives and the solution is The current starts from 0 and asymptotes to the steady state value    (for accessibility)     If and . The solution is Using the integral from the second example in the first section gives the general solution Using the initial condition gives the solution   An example plot of the solution is   (for accessibility)   Electrical engineers call the homogeneous solution the transient response since it tends to zero as . The remainder of the solution (the particular integral) is called the steady state response.   "
},
{
  "id": "sec-Electrical-Circuits-5",
  "level": "2",
  "url": "sec-Electrical-Circuits.html#sec-Electrical-Circuits-5",
  "type": "Example",
  "number": "3.3.1",
  "title": "",
  "body": " If a constant and then using the initial condition gives and the solution is The current starts from 0 and asymptotes to the steady state value    (for accessibility)   "
},
{
  "id": "sec-Electrical-Circuits-6",
  "level": "2",
  "url": "sec-Electrical-Circuits.html#sec-Electrical-Circuits-6",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": " If and . The solution is Using the integral from the second example in the first section gives the general solution Using the initial condition gives the solution   An example plot of the solution is   (for accessibility)   Electrical engineers call the homogeneous solution the transient response since it tends to zero as . The remainder of the solution (the particular integral) is called the steady state response.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
