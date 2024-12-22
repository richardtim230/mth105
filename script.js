// Data for topics and their content

const topicsContent = {

  "number-systems": {

    title: "Number Systems",

    description: "Understand the fundamental number systems, including real, rational, and complex numbers.",

    keyConcepts: [

      "Real numbers",

      "Rational and irrational numbers",

      "Complex numbers",

      "Conversion between number systems"

    ],

    lecture: `

      <h2>Number Systems</h2>

      <p>Number systems are the foundation of mathematics, representing values for computation and analysis.</p>

      <h3>Types of Numbers:</h3>

      <ul>

        <li><strong>Real Numbers:</strong> Include all rational and irrational numbers.</li>

        <li><strong>Rational Numbers:</strong> Numbers that can be expressed as a fraction (e.g., 1/2, -3, 4.5).</li>

        <li><strong>Irrational Numbers:</strong> Numbers that cannot be expressed as fractions (e.g., √2, π).</li>

        <li><strong>Complex Numbers:</strong> Numbers in the form a + bi, where i is the imaginary unit (e.g., 3 + 2i).</li>

      </ul>

    `

  },

  "basic-algebra": {

    title: "Basic Algebra",

    description: "Learn the foundations of algebra, including solving equations and factorization.",

    keyConcepts: [

      "Linear equations",

      "Quadratic equations",

      "Simultaneous equations",

      "Factorization techniques"

    ],

    lecture: `

      <h2>Basic Algebra</h2>

      <p>Algebra is the branch of mathematics that uses symbols to represent numbers and operations in equations and expressions.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Linear Equations:</strong> Equations of the form ax + b = 0.</li>

        <li><strong>Quadratic Equations:</strong> Equations of the form ax² + bx + c = 0, solved using the quadratic formula.</li>

        <li><strong>Simultaneous Equations:</strong> Solving systems of equations involving two or more unknowns.</li>

        <li><strong>Factorization Techniques:</strong> Breaking down polynomials into simpler factors.</li>

      </ul>

    `

  },

  "functions-graphs": {

    title: "Functions and Graphs",

    description: "Understand functions, their domains, ranges, and graphical representations.",

    keyConcepts: [

      "Definition of functions",

      "Domain and range",

      "Polynomial and rational functions",

      "Sketching graphs"

    ],

    lecture: `

      <h2>Functions and Graphs</h2>

      <p>A function represents a relationship between input and output, where each input has a unique output.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Definition of Functions:</strong> A function maps each input (x) to exactly one output (y).</li>

        <li><strong>Domain and Range:</strong> The domain is the set of possible inputs, and the range is the set of possible outputs.</li>

        <li><strong>Graphical Representation:</strong> Functions can be visualized using graphs, showing the relationship between variables.</li>

      </ul>

    `

  },

  "differentiation": {

    title: "Differentiation",

    description: "Learn the basics of calculus, including limits, derivatives, and their applications.",

    keyConcepts: [

      "Limits and continuity",

      "Derivatives of functions",

      "Rules of differentiation",

      "Applications (rate of change, maxima/minima)"

    ],

    lecture: `

      <h2>Differentiation</h2>

      <p>Differentiation is a fundamental concept in calculus that measures how a function changes as its input changes.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Limits and Continuity:</strong> Understanding how functions behave as inputs approach specific values.</li>

        <li><strong>Derivatives:</strong> Calculating the slope of a function at a given point.</li>

        <li><strong>Rules of Differentiation:</strong> Including product, quotient, and chain rules.</li>

      </ul>

    `

  },

  "integration": {

    title: "Integration",

    description: "Understand integrals, their computation, and their applications in geometry and physics.",

    keyConcepts: [

      "Indefinite integrals",

      "Definite integrals",

      "Techniques of integration",

      "Applications (area under curves)"

    ],

    lecture: `

      <h2>Integration</h2>

      <p>Integration is the process of finding the area under a curve or the accumulation of quantities.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Indefinite Integrals:</strong> Finding the general form of an antiderivative.</li>

        <li><strong>Definite Integrals:</strong> Calculating the exact area under a curve within specific limits.</li>

        <li><strong>Applications:</strong> Includes computing areas, volumes, and solving differential equations.</li>

      </ul>

    `

  },

  "sequences-series": {

    title: "Sequences and Series",

    description: "Explore arithmetic and geometric progressions, and understand series convergence.",

    keyConcepts: [

      "Arithmetic and geometric progressions",

      "Convergence and divergence",

      "Summation of series"

    ],

    lecture: `

      <h2>Sequences and Series</h2>

      <p>Sequences are ordered lists of numbers, while series are sums of terms in sequences.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Arithmetic Progressions:</strong> Sequences with a constant difference between terms.</li>

        <li><strong>Geometric Progressions:</strong> Sequences with a constant ratio between terms.</li>

        <li><strong>Convergence:</strong> Determining if a series approaches a finite value as terms increase.</li>

      </ul>

    `

  },

  "matrices-determinants": {

    title: "Matrices and Determinants",

    description: "Learn about matrix operations, determinants, and applications to linear equations.",

    keyConcepts: [

      "Matrix operations",

      "Determinants of matrices",

      "Inverse of a matrix",

      "Applications to linear equations"

    ],

    lecture: `

      <h2>Matrices and Determinants</h2>

      <p>Matrices represent systems of equations and transformations, while determinants indicate properties of matrices.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Matrix Operations:</strong> Addition, subtraction, and multiplication of matrices.</li>

        <li><strong>Determinants:</strong> Calculating values that describe matrix properties.</li>

        <li><strong>Applications:</strong> Solving linear systems using matrix methods.</li>

      </ul>

    `

  },

  "vectors": {

    title: "Vectors",

    description: "Understand vector operations, including dot and cross products, and their applications in geometry.",

    keyConcepts: [

      "Scalars and vectors",

      "Vector algebra",

      "Dot and cross products",

      "Applications in geometry"

    ],

    lecture: `

      <h2>Vectors</h2>

      <p>Vectors represent quantities with both magnitude and direction, essential for physics and engineering.</p>

      <h3>Key Topics:</h3>

      <ul>

        <li><strong>Vector Algebra:</strong> Addition, subtraction, and scalar multiplication of vectors.</li>

        <li><strong>Dot Product:</strong> Measures the projection of one vector onto another.</li>

        <li><strong>Cross Product:</strong> Produces a vector perpendicular to two input vectors.</li>

        <li><strong>Applications:</strong> Includes calculating distances, angles, and areas in geometry.</li>

      </ul>

    `

  }

};

// Elements

const topicsSection = document.getElementById("topics-section");

const topicDetailsSection = document.getElementById("topic-details-section");

const topicContent = document.getElementById("topic-content");

const backButton = document.getElementById("back-button");

// Event listener for topic links

document.querySelectorAll(".topic-link").forEach(link => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    const topicId = event.target.dataset.topic;

    loadTopicContent(topicId);

  });

});

// Back button event listener

backButton.addEventListener("click", () => {

  topicsSection.classList.remove("hidden");

  topicDetailsSection.classList.add("hidden");

});

// Function to load topic content dynamically

function loadTopicContent(topicId) {

  const topic = topicsContent[topicId];

  if (topic) {

    topicContent.innerHTML = `

      <h1>${topic.title}</h1>

      <p>${topic.description}</p>

      <h2>Key Concepts</h2>

      <ul>

        ${topic.keyConcepts.map(concept => `<li>${concept}</li>`).join("")}

      </ul>

      <h2>Lecture</h2>

      ${topic.lecture}

    `;

    // Show the topic details section and hide the topics list

    topicsSection.classList.add("hidden");

    topicDetailsSection.classList.remove("hidden");

  }

}