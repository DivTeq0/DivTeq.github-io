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
  "id": "my-great-book-3-2",
  "level": "1",
  "url": "my-great-book-3-2.html",
  "type": "Section",
  "number": "1.1",
  "title": "The definition of the dot product",
  "body": " The definition of the dot product  The dot product of a vector with itself is defined as  If   Thus    Consider the triangle illustrated   A triangle    Recalling the law of cosines for the triangle   Comparing the two leads to    Example  Find the angle between the vectors      Example  Show that the following vectors are orthogonal     "
},
{
  "id": "sec-",
  "level": "1",
  "url": "sec-.html",
  "type": "Section",
  "number": "1.2",
  "title": "Vector Projection",
  "body": " Vector Projection  In many applications of vectors it is useful to be able to express a vector as the sum of vectors parallel and perpendicular to a given vector   Vector projection   Note that since is parallel to     Then   then   The scalar projection is the magnitude of this vector    Example  Given the vectors   find the components of parallel and perpendicular to      "
},
{
  "id": "my-great-book-3-4",
  "level": "1",
  "url": "my-great-book-3-4.html",
  "type": "Section",
  "number": "1.3",
  "title": "Problems",
  "body": " Problems   Given the vectors     Find the angle between the vectors    Express in terms of vectors parallel and perpendicular to                       Show that the points are the vertices of a right triangle         What is the angle between the vector from the origin to the point and the vector from to the point ?          Find the distance from the point to the line through the points and         So the distance is      Find a vector that is perpendicular to both of the vectors    Let then    Let then   So the answer is any vector of the form      For a parallelogram show the sum of the squares of the lengths of the diagonals is equal to the sum of the squares of the lengths of the sides.         Show that the diagonals of a rhombus (a parallelogram with equal length sides) are orthogonal.    Since     "
},
{
  "id": "my-great-book-3-4-2",
  "level": "2",
  "url": "my-great-book-3-4.html#my-great-book-3-4-2",
  "type": "Checkpoint",
  "number": "1.3.1",
  "title": "",
  "body": " Given the vectors     Find the angle between the vectors    Express in terms of vectors parallel and perpendicular to                     "
},
{
  "id": "my-great-book-3-4-3",
  "level": "2",
  "url": "my-great-book-3-4.html#my-great-book-3-4-3",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": " Show that the points are the vertices of a right triangle       "
},
{
  "id": "my-great-book-3-4-4",
  "level": "2",
  "url": "my-great-book-3-4.html#my-great-book-3-4-4",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "",
  "body": " What is the angle between the vector from the origin to the point and the vector from to the point ?        "
},
{
  "id": "my-great-book-3-4-5",
  "level": "2",
  "url": "my-great-book-3-4.html#my-great-book-3-4-5",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": " Find the distance from the point to the line through the points and         So the distance is    "
},
{
  "id": "my-great-book-3-4-6",
  "level": "2",
  "url": "my-great-book-3-4.html#my-great-book-3-4-6",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": " Find a vector that is perpendicular to both of the vectors    Let then    Let then   So the answer is any vector of the form    "
},
{
  "id": "my-great-book-3-4-7",
  "level": "2",
  "url": "my-great-book-3-4.html#my-great-book-3-4-7",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "",
  "body": " For a parallelogram show the sum of the squares of the lengths of the diagonals is equal to the sum of the squares of the lengths of the sides.       "
},
{
  "id": "my-great-book-3-4-8",
  "level": "2",
  "url": "my-great-book-3-4.html#my-great-book-3-4-8",
  "type": "Checkpoint",
  "number": "1.3.7",
  "title": "",
  "body": " Show that the diagonals of a rhombus (a parallelogram with equal length sides) are orthogonal.    Since    "
},
{
  "id": "my-great-book-4-2",
  "level": "1",
  "url": "my-great-book-4-2.html",
  "type": "Section",
  "number": "2.1",
  "title": "Properties of the Cross Product",
  "body": "> Properties of the Cross Product  The cross product of two vectors (in , is a vector with the properties     is orthogonal to both      is the area of the parallelogram with sides      form a right handed triad.       If is the angle between and then the second property implies    Parallelogram area   To find the direction of , use the right hand rule. Using your right hand in the position illustrated, your thumb gives the direction of the cross product.   Right Hand Rule   One consequence of this is that the cross product is anti commutative.   Another consequence is that if and are parallel (or antiparallel) then   "
},
{
  "id": "my-great-book-4-3",
  "level": "1",
  "url": "my-great-book-4-3.html",
  "type": "Section",
  "number": "2.2",
  "title": "Calculating the Cross Product",
  "body": " Calculating the Cross Product  One way to calculate the components of is to use the cross products of the basis vectors    The usual method is to express it as a determinant   The coefficient of each vector is obtained by eliminating the column of the vector in the array, noting that the component is negative. The determinants are calculated by    Example  Find given      Example  Find the area of the triangle with vertices      "
},
{
  "id": "my-great-book-4-4",
  "level": "1",
  "url": "my-great-book-4-4.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Scalar Triple Product",
  "body": " The Scalar Triple Product   The triple product   The signed volume of the parallelpiped with sides with three vectors is   The volume will be positive if it is a right handed triad, negative it it's left handed. The scalar triple product has the properties   If the three vectors lie in the same plane then   Another use of the triple product is to express a vector as a combination of three given vectors   Crossing the equation with followed by dotting it with gives   Similarly   In linear algebra this method is known as Cramers's rule  "
},
{
  "id": "my-great-book-4-5",
  "level": "1",
  "url": "my-great-book-4-5.html",
  "type": "Section",
  "number": "2.4",
  "title": "Problems",
  "body": " Problems   Given   (a) Show and are orthogonal.    (b) Find a unit vector orthogonal to both and .    (c) Given find if               Find the area of the parallelogram with sides           Find the volume of the parallelepiped with sides          Find the area of the triangle with vertices           Solve the equation   where           Find two unit vectors orthogonal to each other and also orthogonal to   Choose        Given (a) Show that the vectors lie in the same plane. (b) Find so that   (a) (b) Using the cross product    So      "
},
{
  "id": "my-great-book-4-5-2",
  "level": "2",
  "url": "my-great-book-4-5.html#my-great-book-4-5-2",
  "type": "Checkpoint",
  "number": "2.4.1",
  "title": "",
  "body": " Given   (a) Show and are orthogonal.    (b) Find a unit vector orthogonal to both and .    (c) Given find if             "
},
{
  "id": "my-great-book-4-5-3",
  "level": "2",
  "url": "my-great-book-4-5.html#my-great-book-4-5-3",
  "type": "Checkpoint",
  "number": "2.4.2",
  "title": "",
  "body": " Find the area of the parallelogram with sides         "
},
{
  "id": "my-great-book-4-5-4",
  "level": "2",
  "url": "my-great-book-4-5.html#my-great-book-4-5-4",
  "type": "Checkpoint",
  "number": "2.4.3",
  "title": "",
  "body": " Find the volume of the parallelepiped with sides        "
},
{
  "id": "my-great-book-4-5-5",
  "level": "2",
  "url": "my-great-book-4-5.html#my-great-book-4-5-5",
  "type": "Checkpoint",
  "number": "2.4.4",
  "title": "",
  "body": " Find the area of the triangle with vertices         "
},
{
  "id": "my-great-book-4-5-6",
  "level": "2",
  "url": "my-great-book-4-5.html#my-great-book-4-5-6",
  "type": "Checkpoint",
  "number": "2.4.5",
  "title": "",
  "body": " Solve the equation   where         "
},
{
  "id": "my-great-book-4-5-7",
  "level": "2",
  "url": "my-great-book-4-5.html#my-great-book-4-5-7",
  "type": "Checkpoint",
  "number": "2.4.6",
  "title": "",
  "body": " Find two unit vectors orthogonal to each other and also orthogonal to   Choose      "
},
{
  "id": "my-great-book-4-5-8",
  "level": "2",
  "url": "my-great-book-4-5.html#my-great-book-4-5-8",
  "type": "Checkpoint",
  "number": "2.4.7",
  "title": "",
  "body": " Given (a) Show that the vectors lie in the same plane. (b) Find so that   (a) (b) Using the cross product    So     "
},
{
  "id": "my-great-book-5-2",
  "level": "1",
  "url": "my-great-book-5-2.html",
  "type": "Section",
  "number": "3.1",
  "title": "Lines",
  "body": " Lines  Let the two points be and with corresponding vectors and , then if is on the line through and then the vectors and are parallel.   A line through two points  If Then the line can be also expressed in the symmetric form    Example  Find the equation of the line through the points and The corresponding vectors are  Then the parametric equation for the line is and the symmetric form is    "
},
{
  "id": "my-great-book-5-3",
  "level": "1",
  "url": "my-great-book-5-3.html",
  "type": "Section",
  "number": "3.2",
  "title": "Intersection of two lines",
  "body": " Intersection of two lines  In two lines will not intersect in general. If the lines are given as The two lines will intersect id there are values of so the     Example  Find the intersection point of the two lines     So and the intersection point is    "
},
{
  "id": "my-great-book-5-4",
  "level": "1",
  "url": "my-great-book-5-4.html",
  "type": "Section",
  "number": "3.3",
  "title": "Distance between two lines",
  "body": " Distance between two lines    Distance between two lines  If the lines are given as The distance will be the scalar projection of the vector between a point on each of the lines, perpendicular to both lines    Example Let the lines be     "
},
{
  "id": "my-great-book-5-5",
  "level": "1",
  "url": "my-great-book-5-5.html",
  "type": "Section",
  "number": "3.4",
  "title": "Distance from a point to a line",
  "body": " Distance from a point to a line    Distance from a point to a line  If the equation of the line is then the area of the parallelogram is    Example  Find the distance from the point to the line through the points and .      "
},
{
  "id": "sec-Planes",
  "level": "1",
  "url": "sec-Planes.html",
  "type": "Section",
  "number": "3.5",
  "title": "Planes",
  "body": " Planes    A plane with vectors  If are three points on a plane and is any other point on the plane then the three vectors lie in the plane then where the normal to the plane is If then the equation of the plane is    Example  Find the equation of the plane containing the points .  The equation of the plane is   "
},
{
  "id": "my-great-book-5-7",
  "level": "1",
  "url": "my-great-book-5-7.html",
  "type": "Section",
  "number": "3.6",
  "title": "Distance from a point to a plane",
  "body": " Distance from a point to a plane  The distance will the scalar projection of a vector from the plane to the point in the direction of the normal.  Diagram displaying the parallel projection of the vector from a point in the plane to the point onto the normal for the plane      Example  Find the distance from the point to the plane     "
},
{
  "id": "my-great-book-5-8",
  "level": "1",
  "url": "my-great-book-5-8.html",
  "type": "Section",
  "number": "3.7",
  "title": "Intersection of two Planes",
  "body": " Intersection of two Planes  The intersection line lies in both planes so will be orthogonal to both normals. The direction of the line will be . We just need then to find a point that lies on both planes.  Depicting the line of intersection of two plane together with the plane normals and the direction vector for the line     Example  Find the line of intersection of the planes and  Now put in the plane equations So the equation of the line is    "
},
{
  "id": "my-great-book-5-9",
  "level": "1",
  "url": "my-great-book-5-9.html",
  "type": "Section",
  "number": "3.8",
  "title": "Problems",
  "body": " Problems   Find the point on the line closest to the origin    The point will correspond to the projection of orthogonal to the direction .      (a) Find the equation of the plane containing the point and the line . (b) Find the distance from the point to the plane    (a) Two vectors that lie in the plane are and . A normal to the plane is The equation of the plane is (b) The distance will be     Find the components of the vector parallel and perpendicular to the plane .    A normal vector is then      Show that the points are coplanar    They will be coplanar if      Calculate the distance between the line through the points and and the line through the points and     The equations of the two lines are       (a) Find the equation of the line of intersection of the planes   (b) Find the point of intersection of the line from part (a) and the plane     (a) The direction of the line will be perpendicular to both the plane normals To determine the intersection point of the line with the plane set  So the equation of the line is (b) Substituting the equation of the line into the equation of the plane So the intersection point is    "
},
{
  "id": "my-great-book-5-9-2",
  "level": "2",
  "url": "my-great-book-5-9.html#my-great-book-5-9-2",
  "type": "Checkpoint",
  "number": "3.8.1",
  "title": "",
  "body": " Find the point on the line closest to the origin  "
},
{
  "id": "my-great-book-5-9-4",
  "level": "2",
  "url": "my-great-book-5-9.html#my-great-book-5-9-4",
  "type": "Checkpoint",
  "number": "3.8.2",
  "title": "",
  "body": " (a) Find the equation of the plane containing the point and the line . (b) Find the distance from the point to the plane  "
},
{
  "id": "my-great-book-5-9-6",
  "level": "2",
  "url": "my-great-book-5-9.html#my-great-book-5-9-6",
  "type": "Checkpoint",
  "number": "3.8.3",
  "title": "",
  "body": " Find the components of the vector parallel and perpendicular to the plane .  "
},
{
  "id": "my-great-book-5-9-8",
  "level": "2",
  "url": "my-great-book-5-9.html#my-great-book-5-9-8",
  "type": "Checkpoint",
  "number": "3.8.4",
  "title": "",
  "body": " Show that the points are coplanar  "
},
{
  "id": "my-great-book-5-9-10",
  "level": "2",
  "url": "my-great-book-5-9.html#my-great-book-5-9-10",
  "type": "Checkpoint",
  "number": "3.8.5",
  "title": "",
  "body": " Calculate the distance between the line through the points and and the line through the points and   "
},
{
  "id": "my-great-book-5-9-12",
  "level": "2",
  "url": "my-great-book-5-9.html#my-great-book-5-9-12",
  "type": "Checkpoint",
  "number": "3.8.6",
  "title": "",
  "body": " (a) Find the equation of the line of intersection of the planes   (b) Find the point of intersection of the line from part (a) and the plane   "
},
{
  "id": "sec-Traces",
  "level": "1",
  "url": "sec-Traces.html",
  "type": "Section",
  "number": "4.1",
  "title": "Traces",
  "body": " Traces  One method of visualizing surfaces in three dimensions is to examine the curves of interesection of the surface with planes parallel to the coordinate planes, known as traces   Example  Consider the surface . Some of the traces are    The traces for . They are downward opening parabolas    The traces for . They are upward opening parabolas    The traces for . They are hyperbolas    Here is a graph of the surface with the traces superimposed  The graph of with traces drawn on the graph     "
},
{
  "id": "my-great-book-6-3",
  "level": "1",
  "url": "my-great-book-6-3.html",
  "type": "Section",
  "number": "4.2",
  "title": "Conic Sections",
  "body": " Conic Sections  Conic sections are plane curves given by equations that are quadratic in and . Translations anr rotations will reduce them to the standard forms.   A circle centered at the origin with radius    An ellipse centered at the origin with semimajor axis and semiminor axis      A parabola with equation    A hrperbola with equation with asymptotes   They are known as conic sections as they occur as the curves of intersection of a plane with a double cone   A circle formed by the intersection of a horizontal plane with a double cone    An ellipse formed by the intersection of a non horizontal plane with one of the cones      A parabola form by intersecting one of the cones with a plane parallel to its side    A hyperbola formed by a plane intersecting both cones     "
},
{
  "id": "my-great-book-6-4",
  "level": "1",
  "url": "my-great-book-6-4.html",
  "type": "Section",
  "number": "4.3",
  "title": "Cylinders",
  "body": " Cylinders  Cylinders are surfaces that have a constant cross section. The most common type has one of the variables missing.   Example  This is a graph of   The graph of illustrating that the crossections at constant values of are similar parabolas  The cross sections at constant values of are similar parabolas   Other expressions give rise to cylinders. Functions of the form constant also give rise to cylinders.   Example  This is a graph of .  The graph of with constant elliptic cross sections  The intersection of the graph with planes perpendicular to the line give rise to constant ellipses   "
},
{
  "id": "sec-Quadrics",
  "level": "1",
  "url": "sec-Quadrics.html",
  "type": "Section",
  "number": "4.4",
  "title": "Quadrics",
  "body": " Quadrics  Quadric surfaces have equations that are quadratic in . The basic types have the forms The third possibility of having only one of the variables quadratic gives rise to parabolic cylinders. Traces of the surfaces will be conic sections   Ellipsoids  Ellipsoids have equations of the form The traces are ellipses   An ellipsoid centered at the origin    An ellipsoid centered at the origin      Hyperboloids of one sheet  These have equations of the form The horizontal traces are ellipses with radii increasing as you move away from the plane. The vertical traces are hyperbolas.   A hyperboloid of one sheet    A hyperboloid of one sheet      Hyperboloids of two sheets  These have equations of the form The horizontal traces are ellipses with radii increasing as you move away from the plane. There are no taces until . The vertical traces are hyperbolas.  A hyperboloid of two sheets      Paraboloids  Paraboloids have equations of the form The horizontal traces are ellipses with radii increasing as you move away from the plane with  The vertical traces are parabolas   A paraboloid with axis the axis    A paraboloid with axis the axis      Hyperbolic paraboloids  Their equations have the form The vertical traces are parabolas The horizontal traces are hyperbolas   (Graph of a hyberbolic paraboloid, shaped like a saddle or a Pringles chip    (Graph of a hyberbolic paraboloid, shaped like a saddle or a Plingles chip     "
},
{
  "id": "my-great-book-7-2",
  "level": "1",
  "url": "my-great-book-7-2.html",
  "type": "Section",
  "number": "5.1",
  "title": "Parametric equations",
  "body": " Parametric equations  Curves in the plane can be specified in three different ways Parametric equations are the most useful way to describe a curve. The graph can be parametrized trivially as Implicit descriptions of curves don't always represent functions. As an example the circle isn't the graph of a function (it is the graph of two functions ). However the circle can be descibed parametrically by a vector function One feature that parametric curves have that graphs generally don't have is an orientation. As the parameter increases, the point moves along the curve.   Example  Consider the parametric curve The cartesian equation for the curve is Since and is increasing on the interval , the parametric curve is the positive half of the hyperbola with the orientation shown below.  A graph of the parametric curve as half of a hyperbola with an upward orientation     Polar curves can also be expressed in parametric form. The curve can be represented parametrically with as the parameter   The first two representations for curves don't generalize to . Graphs of functions, and equations of the form are surfaces not curves. Parametric equations still represent curves. A paramerized curve in is given by   A parametrization that will be useful later in the course is the line segment from a point with position vector to a point with position vector is paranetrized as    Example  A helix has a parametrization The curve moves along the cylinder counterclockwise while moving in the positive direction   A helix with the curve moving upwards and also moving counterclockwise along the cylinder when viewed from above    "
},
{
  "id": "sec-Tangents",
  "level": "1",
  "url": "sec-Tangents.html",
  "type": "Section",
  "number": "5.2",
  "title": "Tangents",
  "body": " Tangents  To find a vector tangent to a given curve, we will proceed analogously to single variable calculus. To find the tangent at a point, choose a nearby poit and calculate the vector joining them. As the neaby point moves closer to the given point the vector joining them becomes closer to pointing in the tangent direction.   Two points on a parametrized curve and the vector joinig them       Example  Find the equation of the tangent line to the curve at the point   The point corresponds to . So the equation of the tangent line will be  and the equation of the tangent line is    "
},
{
  "id": "my-great-book-7-4",
  "level": "1",
  "url": "my-great-book-7-4.html",
  "type": "Section",
  "number": "5.3",
  "title": "Arc Length",
  "body": " Arc Length  To calculate the length of a parametrized curve Partition the interval into subintervals . The length of the curve can be approximated by summing the lengths of the vectors  Letting  Taking the limits , the arc length becomes an integral    Example  Find the length of the curve       "
},
{
  "id": "sec-Curvature",
  "level": "1",
  "url": "sec-Curvature.html",
  "type": "Section",
  "number": "5.4",
  "title": "Curvature",
  "body": " Curvature    "
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
