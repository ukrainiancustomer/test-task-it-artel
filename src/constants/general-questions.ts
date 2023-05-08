export const GENERAL_Q1_EXAMPLE_CODE_HTML: string = `
  <div class="element"></div>

`;

export const GENERAL_Q1_EXAMPLE_CODE_CSS: string = `
  .element::before {
    content: "Before content";
    color: red;
  }

  .element::after {
    content: "After content";
    color: blue;
  }

`;

export const GENERAL_Q1_EXAMPLE_CODE_JS: string = `
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = \`
      .element::before { content: 'Updated before content'; } 
      .element::after { content: 'Updated after content'; }
  \`;
  document.getElementsByTagName("head")[0].appendChild(style);

`;

export const GENERAL_Q3_IMAGE: string =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8wAAAKHCAMAAABjHjFHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJnUExURf////7+/v7//ujz6avTrqTTqKnYranZraXUqZ3MoZ3NoZ3MoJ7NoaLPpdDn0r/ewg+DGQB3BAd9EQd9EAZ9EAh+EgqAFAZ/EAB3Ane5fL3gwAmCEwBAAAAZAAAQAAAOAAAPAAAjAAAkAAAaAAARADZfOqvUr7LbtbbZuZDGlQd/EWixbsDjwxKIHAAiAAoACTowOUU8REE4QEI6QkQ7Qx8WHgAAABsSGkM6QjwzO1dOVuv06xyKJmewbcDiwwAbACkhKd7d3vb29vv7+3h3eGZmZv39/ejn6CUlJURERNvt3RqJIy4mLfHw8YKCgnBwcCoqKkJCQtvs3CsjK+bl5nt7e2pqavDw8CcnJ0NDQy4lLvbt9YSAhHJucf/5/yopKkhGSGawbb7hwQqEFCEfIK3LsMzwz8Tnx8ntzF1uX1BeUcbpycbpyMvvzrXWuB8kHzA5MLjbu7/jwrjau8ThxpzMoAmAEwuEFQMPBBB5GROQHRKLHBOOHQhBDQg5DBKMHBOPHRGAGwMVBQIhBQuBFQuGFgyBFQB1AHS3eur47KXUqDtMPAAnAAAwAAAtAAAuAAAvAAAXAAAcAAAdACUzJpbOm5DGlI/FlJXImcrkzG5rbgUGBSUmJS8rLisjKiojKhsaG3l3eWhnaBkZGcLCwvf29+fm5+fm5uXl5e/v711dXQUFBXFxcYeHh39/f4aGhiwsLBYWFuHh4VNTUx0dHQwMDNHR0VRUVBwcHOjo6G1tbQ0NDdLS0hsbG+Pj42trax4eHvLy8nNzcxQUFMvLy1xcXFlZWQoKCtPT06WlpXh4eOfn5wAAAGFSrFwAAADNdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////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";

export const GENERAL_Q3_SOLUTION_HTML: string = `
  <div class="box-container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>

`;

export const GENERAL_Q3_SOLUTION_FLEXBOX: string = `
  .box-container {
    display: flex;
  }

  .box {
    flex: 0 0 20px;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    box-sizing: border-box;
  }

`;

export const GENERAL_Q3_SOLUTION_GRID: string = `
  .box-container {
    display: grid;
    grid-template-columns: repeat(3, 20px);
    grid-gap: 0;
    width: 60px;
    border: 1px solid black;
  }

  .box {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    box-sizing: border-box;
  }

`;

export const GENERAL_Q3_SOLUTION_INLINE_BLOCK: string = `
  .box-container {
    font-size: 0;
  }

  .box {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    box-sizing: border-box;
  }

`;

export const GENERAL_Q3_SOLUTION_ABSOLUTE_POSITION: string = `
  .box-container {
    position: relative;
    width: 60px;
    height: 20px;
    border: 1px solid black;
  }

  .box {
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    border: 1px solid black;
    box-sizing: border-box;
  }

  .box:nth-child(1) {
    left: 0;
  }

  .box:nth-child(2) {
    left: 20px;
  }

  .box:nth-child(3) {
    left: 40px;
  }

`;

export const GENERAL_Q3_SOLUTION_FLOAT: string = `
  .box-container::after {
    content: "";
    display: block;
    clear: both;
  }

  .box {
    float: left;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    box-sizing: border-box;
  }

`;

export const GENERAL_Q3_SOLUTION_TABLE_CELL = `
  .box-container {
    display: table;
    width: 60px;
    border-collapse: collapse;
  }

  .box {
    display: table-cell;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

`;

export const GENERAL_Q4_SOURCE_UNSORTED_ARRAY = `
  let array = [
    {date: "2017-01-10"},
    {date: "2016-05-18"},
    {date: "2002-12-20"},
    {date: "2020-06-30"}
  ];

`;

export const GENERAL_Q4_SOLUTION_SORTED_ARRAY = `
  array.sort((a, b) => new Date(a.date) - new Date(b.date));
  // output: [{ date: "2002-12-20" }, { date: "2016-05-18" }, { date: "2017-01-10" }, { date: "2020-06-30" } ]

  array.sort((a, b) => new Date(b.date) - new Date(a.date));
  // output: [{ date: "2020-06-30" }, { date: "2017-01-10" }, { date: "2016-05-18" }, { date: "2002-12-20" }]

`;

export const GENERAL_Q5_SOURCE_CODE_HTML = `
  <div id="root" style="background: red;">
    root
    <span id="id1" style="background: lightblue;">id1</span>
    <div id="id2" style="background: green;">
      id2
      <div id="id3" style="background: yellow;">id3</div>
    </div>
  </div>

`;

export const GENERAL_Q5_SOLUTION_JS = `
  root.addEventListener("click", (event) => {
    if (event.target.id) {
      console.log(event.target.id);
    } else {
      console.log("Targeted element has no ID.");
    }
  });

`;
