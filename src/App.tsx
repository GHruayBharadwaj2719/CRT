import React, { useState } from 'react';
import { BookOpen, Code, TrendingUp, Brain, MessageSquare, CheckCircle, Award, BarChart, Calendar, Trophy, ExternalLink, Plus, Trash2, X, Target, FileText } from 'lucide-react';

const LearningPlatform = () => {
  const [selectedCategory, setSelectedCategory] = useState('coding');
  const [completedLessons, setCompletedLessons] = useState({});
  const [activeView, setActiveView] = useState('courses');
  const [showNotesFor, setShowNotesFor] = useState(null);
  const [showProblemsFor, setShowProblemsFor] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [customLessons, setCustomLessons] = useState({
    coding: [],
    quant: [],
    reasoning: [],
    communication: []
  });
  const [showAddLesson, setShowAddLesson] = useState(false);
  const [newLesson, setNewLesson] = useState({ title: '', duration: '', topics: '', resources: '' });

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'cpp', name: 'C++', icon: '⚡' },
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'c', name: 'C', icon: '🔵' }
  ];

  const categories = [
    { id: 'coding', name: 'Coding & DSA', icon: Code },
    { id: 'quant', name: 'Quantitative', icon: TrendingUp },
    { id: 'reasoning', name: 'Reasoning', icon: Brain },
    { id: 'communication', name: 'Communication', icon: MessageSquare }
  ];

  const courses = {
    coding: [
      { id: 'c1', title: 'Variables & Data Types', duration: '1.5h', topics: ['Variables', 'Integers', 'Strings'],
        notes: {
          python: [
            { name: 'W3Schools - Python Variables', url: 'https://www.w3schools.com/python/python_variables.asp' },
            { name: 'GeeksforGeeks - Python Data Types', url: 'https://www.geeksforgeeks.org/python-data-types/' }
          ],
          java: [
            { name: 'W3Schools - Java Variables', url: 'https://www.w3schools.com/java/java_variables.asp' },
            { name: 'GeeksforGeeks - Java Data Types', url: 'https://www.geeksforgeeks.org/data-types-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Variables', url: 'https://www.w3schools.com/cpp/cpp_variables.asp' },
            { name: 'GeeksforGeeks - C++ Data Types', url: 'https://www.geeksforgeeks.org/cpp-data-types/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Variables', url: 'https://www.w3schools.com/js/js_variables.asp' },
            { name: 'GeeksforGeeks - JS Data Types', url: 'https://www.geeksforgeeks.org/javascript-data-types/' }
          ],
          c: [
            { name: 'W3Schools - C Variables', url: 'https://www.w3schools.com/c/c_variables.php' },
            { name: 'GeeksforGeeks - C Data Types', url: 'https://www.geeksforgeeks.org/data-types-in-c/' }
          ]
        },
        problems: [
          { name: 'LeetCode - Easy Problems', url: 'https://leetcode.com/problemset/all/?difficulty=EASY' },
          { name: 'CodeChef (200-400)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=200&end_rating=400&topic=&tags=&group=' }
        ]
      },
      { id: 'c2', title: 'Basic Operations', duration: '1h', topics: ['Arithmetic', 'Comparison', 'Logical'],
        notes: {
          python: [
            { name: 'W3Schools - Python Operators', url: 'https://www.w3schools.com/python/python_operators.asp' },
            { name: 'GeeksforGeeks - Python Operators', url: 'https://www.geeksforgeeks.org/python-operators/' }
          ],
          java: [
            { name: 'W3Schools - Java Operators', url: 'https://www.w3schools.com/java/java_operators.asp' },
            { name: 'GeeksforGeeks - Java Operators', url: 'https://www.geeksforgeeks.org/operators-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Operators', url: 'https://www.w3schools.com/cpp/cpp_operators.asp' },
            { name: 'GeeksforGeeks - C++ Operators', url: 'https://www.geeksforgeeks.org/operators-in-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Operators', url: 'https://www.w3schools.com/js/js_operators.asp' },
            { name: 'GeeksforGeeks - JS Operators', url: 'https://www.geeksforgeeks.org/javascript-operators/' }
          ],
          c: [
            { name: 'W3Schools - C Operators', url: 'https://www.w3schools.com/c/c_operators.php' },
            { name: 'GeeksforGeeks - C Operators', url: 'https://www.geeksforgeeks.org/operators-in-c/' }
          ]
        },
        problems: [
          { name: 'HackerRank - Basic Math', url: 'https://www.hackerrank.com/domains/python' },
          { name: 'CodeChef (200-500)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=200&end_rating=500&topic=&tags=&group=' }
        ]
      },
      { id: 'c3', title: 'Control Flow', duration: '2h', topics: ['If-Else', 'Elif', 'Nested If'],
        notes: {
          python: [
            { name: 'W3Schools - Python If Else', url: 'https://www.w3schools.com/python/python_conditions.asp' },
            { name: 'GeeksforGeeks - Python Conditionals', url: 'https://www.geeksforgeeks.org/python-if-else/' }
          ],
          java: [
            { name: 'W3Schools - Java If Else', url: 'https://www.w3schools.com/java/java_conditions.asp' },
            { name: 'GeeksforGeeks - Java If Else', url: 'https://www.geeksforgeeks.org/java-if-else-statement/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ If Else', url: 'https://www.w3schools.com/cpp/cpp_conditions.asp' },
            { name: 'GeeksforGeeks - C++ If Else', url: 'https://www.geeksforgeeks.org/decision-making-c-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS If Else', url: 'https://www.w3schools.com/js/js_if_else.asp' },
            { name: 'GeeksforGeeks - JS Conditionals', url: 'https://www.geeksforgeeks.org/javascript-if-else-statement/' }
          ],
          c: [
            { name: 'W3Schools - C If Else', url: 'https://www.w3schools.com/c/c_conditions.php' },
            { name: 'GeeksforGeeks - C If Else', url: 'https://www.geeksforgeeks.org/decision-making-c-c-else-nested-else/' }
          ]
        },
        problems: [
          { name: 'HackerRank - If Else', url: 'https://www.hackerrank.com/challenges/py-if-else' },
          { name: 'CodeChef (200-600)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=200&end_rating=600&topic=&tags=&group=' }
        ]
      },
      { id: 'c4', title: 'Loops', duration: '2.5h', topics: ['For Loop', 'While Loop', 'Break'],
        notes: {
          python: [
            { name: 'W3Schools - Python Loops', url: 'https://www.w3schools.com/python/python_for_loops.asp' },
            { name: 'GeeksforGeeks - Python Loops', url: 'https://www.geeksforgeeks.org/loops-in-python/' }
          ],
          java: [
            { name: 'W3Schools - Java Loops', url: 'https://www.w3schools.com/java/java_while_loop.asp' },
            { name: 'GeeksforGeeks - Java Loops', url: 'https://www.geeksforgeeks.org/loops-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Loops', url: 'https://www.w3schools.com/cpp/cpp_while_loop.asp' },
            { name: 'GeeksforGeeks - C++ Loops', url: 'https://www.geeksforgeeks.org/loops-in-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Loops', url: 'https://www.w3schools.com/js/js_loop_for.asp' },
            { name: 'GeeksforGeeks - JS Loops', url: 'https://www.geeksforgeeks.org/loops-in-javascript/' }
          ],
          c: [
            { name: 'W3Schools - C Loops', url: 'https://www.w3schools.com/c/c_while_loop.php' },
            { name: 'GeeksforGeeks - C Loops', url: 'https://www.geeksforgeeks.org/loops-in-c/' }
          ]
        },
        problems: [
          { name: 'HackerRank - Loops', url: 'https://www.hackerrank.com/domains/python' },
          { name: 'CodeChef (400-700)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=400&end_rating=700&topic=&tags=&group=' }
        ]
      },
      { id: 'c5', title: 'Functions', duration: '2h', topics: ['Definition', 'Parameters', 'Return'],
        notes: {
          python: [
            { name: 'W3Schools - Python Functions', url: 'https://www.w3schools.com/python/python_functions.asp' },
            { name: 'GeeksforGeeks - Python Functions', url: 'https://www.geeksforgeeks.org/functions-in-python/' }
          ],
          java: [
            { name: 'W3Schools - Java Methods', url: 'https://www.w3schools.com/java/java_methods.asp' },
            { name: 'GeeksforGeeks - Java Methods', url: 'https://www.geeksforgeeks.org/methods-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Functions', url: 'https://www.w3schools.com/cpp/cpp_functions.asp' },
            { name: 'GeeksforGeeks - C++ Functions', url: 'https://www.geeksforgeeks.org/functions-in-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Functions', url: 'https://www.w3schools.com/js/js_functions.asp' },
            { name: 'GeeksforGeeks - JS Functions', url: 'https://www.geeksforgeeks.org/functions-in-javascript/' }
          ],
          c: [
            { name: 'W3Schools - C Functions', url: 'https://www.w3schools.com/c/c_functions.php' },
            { name: 'GeeksforGeeks - C Functions', url: 'https://www.geeksforgeeks.org/functions-in-c/' }
          ]
        },
        problems: [
          { name: 'HackerRank - Functions', url: 'https://www.hackerrank.com/domains/python' },
          { name: 'CodeChef (500-800)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=500&end_rating=800&topic=&tags=&group=' }
        ]
      },
      { id: 'c6', title: 'Arrays/Lists', duration: '2.5h', topics: ['Indexing', 'Slicing', 'Methods'],
        notes: {
          python: [
            { name: 'W3Schools - Python Lists', url: 'https://www.w3schools.com/python/python_lists.asp' },
            { name: 'GeeksforGeeks - Python Arrays', url: 'https://www.geeksforgeeks.org/python-lists/' }
          ],
          java: [
            { name: 'W3Schools - Java Arrays', url: 'https://www.w3schools.com/java/java_arrays.asp' },
            { name: 'GeeksforGeeks - Java Arrays', url: 'https://www.geeksforgeeks.org/arrays-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Arrays', url: 'https://www.w3schools.com/cpp/cpp_arrays.asp' },
            { name: 'GeeksforGeeks - C++ Arrays', url: 'https://www.geeksforgeeks.org/arrays-in-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Arrays', url: 'https://www.w3schools.com/js/js_arrays.asp' },
            { name: 'GeeksforGeeks - JS Arrays', url: 'https://www.geeksforgeeks.org/arrays-in-javascript/' }
          ],
          c: [
            { name: 'W3Schools - C Arrays', url: 'https://www.w3schools.com/c/c_arrays.php' },
            { name: 'GeeksforGeeks - C Arrays', url: 'https://www.geeksforgeeks.org/arrays-in-c-cpp/' }
          ]
        },
        problems: [
          { name: 'LeetCode - Array', url: 'https://leetcode.com/tag/array/' },
          { name: 'CodeChef (600-900)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=600&end_rating=900&topic=arrays&tags=&group=' }
        ]
      },
      { id: 'c7', title: 'Strings', duration: '2h', topics: ['Operations', 'Methods', 'Formatting'],
        notes: {
          python: [
            { name: 'W3Schools - Python Strings', url: 'https://www.w3schools.com/python/python_strings.asp' },
            { name: 'GeeksforGeeks - Python Strings', url: 'https://www.geeksforgeeks.org/python-strings/' }
          ],
          java: [
            { name: 'W3Schools - Java Strings', url: 'https://www.w3schools.com/java/java_strings.asp' },
            { name: 'GeeksforGeeks - Java Strings', url: 'https://www.geeksforgeeks.org/strings-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Strings', url: 'https://www.w3schools.com/cpp/cpp_strings.asp' },
            { name: 'GeeksforGeeks - C++ Strings', url: 'https://www.geeksforgeeks.org/strings-in-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Strings', url: 'https://www.w3schools.com/js/js_strings.asp' },
            { name: 'GeeksforGeeks - JS Strings', url: 'https://www.geeksforgeeks.org/javascript-strings/' }
          ],
          c: [
            { name: 'W3Schools - C Strings', url: 'https://www.w3schools.com/c/c_strings.php' },
            { name: 'GeeksforGeeks - C Strings', url: 'https://www.geeksforgeeks.org/strings-in-c/' }
          ]
        },
        problems: [
          { name: 'LeetCode - String', url: 'https://leetcode.com/tag/string/' },
          { name: 'CodeChef (600-1000)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=600&end_rating=1000&topic=strings&tags=&group=' }
        ]
      },
      { id: 'c8', title: 'Time Complexity', duration: '2h', topics: ['Big O', 'Analysis'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
            { name: 'W3Schools - Big O', url: 'https://www.w3schools.com/dsa/dsa_algo_bigo.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
            { name: 'W3Schools - Big O', url: 'https://www.w3schools.com/dsa/dsa_algo_bigo.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
            { name: 'W3Schools - Big O', url: 'https://www.w3schools.com/dsa/dsa_algo_bigo.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
            { name: 'W3Schools - Big O', url: 'https://www.w3schools.com/dsa/dsa_algo_bigo.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
            { name: 'W3Schools - Big O', url: 'https://www.w3schools.com/dsa/dsa_algo_bigo.php' }
          ]
        },
        problems: []
      },
      { id: 'c9', title: 'Sorting Algorithms', duration: '3h', topics: ['Bubble', 'Merge', 'Quick Sort'],
        notes: [
          { name: 'GeeksforGeeks - Sorting', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
          { name: 'W3Schools - Sorting', url: 'https://www.w3schools.com/dsa/dsa_algo_sorting.php' }
        ],
        problems: [
          { name: 'LeetCode - Sorting', url: 'https://leetcode.com/tag/sorting/' },
          { name: 'CodeChef (800-1200)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=800&end_rating=1200&topic=sorting&tags=&group=' }
        ]
      },
      { id: 'c10', title: 'Binary Search', duration: '2.5h', topics: ['Binary Search', 'Variants'],
        notes: [
          { name: 'GeeksforGeeks - Binary Search', url: 'https://www.geeksforgeeks.org/binary-search/' },
          { name: 'W3Schools - Binary Search', url: 'https://www.w3schools.com/dsa/dsa_algo_binarysearch.php' }
        ],
        problems: [
          { name: 'LeetCode - Binary Search', url: 'https://leetcode.com/tag/binary-search/' },
          { name: 'CodeChef (900-1300)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=900&end_rating=1300&topic=binary-search&tags=&group=' }
        ]
      },
      { id: 'c11', title: 'Linked Lists', duration: '3h', topics: ['Singly', 'Doubly', 'Operations'],
        notes: [
          { name: 'GeeksforGeeks - Linked List', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' },
          { name: 'W3Schools - Linked Lists', url: 'https://www.w3schools.com/dsa/dsa_data_linkedlists.php' }
        ],
        problems: [
          { name: 'LeetCode - Linked List', url: 'https://leetcode.com/tag/linked-list/' },
          { name: 'CodeChef (1000-1400)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1000&end_rating=1400&topic=linked-list&tags=&group=' }
        ]
      },
      { id: 'c12', title: 'Stacks', duration: '2.5h', topics: ['Stack Ops', 'Implementation'],
        notes: [
          { name: 'GeeksforGeeks - Stack', url: 'https://www.geeksforgeeks.org/stack-data-structure/' },
          { name: 'W3Schools - Stacks', url: 'https://www.w3schools.com/dsa/dsa_data_stacks.php' }
        ],
        problems: [
          { name: 'LeetCode - Stack', url: 'https://leetcode.com/tag/stack/' },
          { name: 'CodeChef (1000-1400)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1000&end_rating=1400&topic=stack&tags=&group=' }
        ]
      },
      { id: 'c13', title: 'Queues', duration: '2.5h', topics: ['Queue Ops', 'Priority Queue'],
        notes: [
          { name: 'GeeksforGeeks - Queue', url: 'https://www.geeksforgeeks.org/queue-data-structure/' },
          { name: 'W3Schools - Queues', url: 'https://www.w3schools.com/dsa/dsa_data_queues.php' }
        ],
        problems: [
          { name: 'LeetCode - Queue', url: 'https://leetcode.com/tag/queue/' },
          { name: 'CodeChef (1000-1400)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1000&end_rating=1400&topic=queue&tags=&group=' }
        ]
      },
      { id: 'c14', title: 'Hashing', duration: '2.5h', topics: ['Hash Tables', 'Hash Map'],
        notes: [
          { name: 'GeeksforGeeks - Hashing', url: 'https://www.geeksforgeeks.org/hashing-data-structure/' },
          { name: 'W3Schools - Hash Tables', url: 'https://www.w3schools.com/dsa/dsa_data_hashtables.php' }
        ],
        problems: [
          { name: 'LeetCode - Hash Table', url: 'https://leetcode.com/tag/hash-table/' },
          { name: 'CodeChef (1100-1500)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1100&end_rating=1500&topic=hashing&tags=&group=' }
        ]
      },
      { id: 'c15', title: 'Recursion', duration: '3h', topics: ['Base Case', 'Backtracking'],
        notes: [
          { name: 'GeeksforGeeks - Recursion', url: 'https://www.geeksforgeeks.org/recursion/' },
          { name: 'W3Schools - Recursion', url: 'https://www.w3schools.com/dsa/dsa_algo_recursion.php' }
        ],
        problems: [
          { name: 'LeetCode - Recursion', url: 'https://leetcode.com/tag/recursion/' },
          { name: 'CodeChef (1000-1400)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1000&end_rating=1400&topic=recursion&tags=&group=' }
        ]
      },
      { id: 'c16', title: 'Trees', duration: '3h', topics: ['Binary Tree', 'BST', 'Traversal'],
        notes: [
          { name: 'GeeksforGeeks - Trees', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
          { name: 'W3Schools - Trees', url: 'https://www.w3schools.com/dsa/dsa_data_trees.php' }
        ],
        problems: [
          { name: 'LeetCode - Tree', url: 'https://leetcode.com/tag/tree/' },
          { name: 'CodeChef (1200-1600)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1200&end_rating=1600&topic=trees&tags=&group=' }
        ]
      },
      { id: 'c17', title: 'Graphs', duration: '3h', topics: ['BFS', 'DFS', 'Representation'],
        notes: [
          { name: 'GeeksforGeeks - Graphs', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
          { name: 'W3Schools - Graphs', url: 'https://www.w3schools.com/dsa/dsa_data_graphs.php' }
        ],
        problems: [
          { name: 'LeetCode - Graph', url: 'https://leetcode.com/tag/graph/' },
          { name: 'CodeChef (1300-1700)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1300&end_rating=1700&topic=graphs&tags=&group=' }
        ]
      },
      { id: 'c18', title: 'Dynamic Programming', duration: '3h', topics: ['Memoization', 'Tabulation'],
        notes: [
          { name: 'GeeksforGeeks - DP', url: 'https://www.geeksforgeeks.org/dynamic-programming/' },
          { name: 'W3Schools - DP', url: 'https://www.w3schools.com/dsa/dsa_algo_dp.php' }
        ],
        problems: [
          { name: 'LeetCode - DP', url: 'https://leetcode.com/tag/dynamic-programming/' },
          { name: 'CodeChef (1400-1800)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1400&end_rating=1800&topic=dynamic-programming&tags=&group=' }
        ]
      },
      { id: 'c19', title: 'Greedy Algorithms', duration: '2.5h', topics: ['Greedy Approach', 'Knapsack'],
        notes: [
          { name: 'GeeksforGeeks - Greedy', url: 'https://www.geeksforgeeks.org/greedy-algorithms/' }
        ],
        problems: [
          { name: 'LeetCode - Greedy', url: 'https://leetcode.com/tag/greedy/' },
          { name: 'CodeChef (1300-1700)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1300&end_rating=1700&topic=greedy&tags=&group=' }
        ]
      },
      { id: 'c20', title: 'Backtracking', duration: '3h', topics: ['N-Queens', 'Sudoku'],
        notes: [
          { name: 'GeeksforGeeks - Backtracking', url: 'https://www.geeksforgeeks.org/backtracking-algorithms/' }
        ],
        problems: [
          { name: 'LeetCode - Backtracking', url: 'https://leetcode.com/tag/backtracking/' },
          { name: 'CodeChef (1400-1800)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1400&end_rating=1800&topic=backtracking&tags=&group=' }
        ]
      }
    ],
    quant: [
      { id: 'q1', title: 'Basic Arithmetic', duration: '2h', topics: ['Addition', 'Division', 'BODMAS'],
        notes: [
          { name: 'Khan Academy - Arithmetic', url: 'https://www.khanacademy.org/math/arithmetic' }
        ],
        problems: [
          { name: 'IndiaBIX - Arithmetic', url: 'https://www.indiabix.com/aptitude/numbers/' },
          { name: 'PrepInsta - Arithmetic', url: 'https://prepinsta.com/quantitative-aptitude/arithmetic/' }
        ]
      },
      { id: 'q2', title: 'Percentages', duration: '2h', topics: ['Basics', 'Applications'],
        notes: [
          { name: 'Khan Academy - Percentages', url: 'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages' }
        ],
        problems: [
          { name: 'IndiaBIX - Percentage', url: 'https://www.indiabix.com/aptitude/percentage/' },
          { name: 'PrepInsta - Percentage', url: 'https://prepinsta.com/quantitative-aptitude/percentage/' }
        ]
      },
      { id: 'q3', title: 'Profit & Loss', duration: '2.5h', topics: ['CP', 'SP', 'Profit%'],
        notes: [
          { name: 'GeeksforGeeks - Profit Loss', url: 'https://www.geeksforgeeks.org/profit-and-loss/' }
        ],
        problems: [
          { name: 'IndiaBIX - Profit Loss', url: 'https://www.indiabix.com/aptitude/profit-and-loss/' },
          { name: 'PrepInsta - Profit Loss', url: 'https://prepinsta.com/quantitative-aptitude/profit-and-loss/' }
        ]
      },
      { id: 'q4', title: 'Simple Interest', duration: '1.5h', topics: ['Principal', 'Rate', 'Time'],
        notes: [
          { name: 'GeeksforGeeks - Simple Interest', url: 'https://www.geeksforgeeks.org/simple-interest/' }
        ],
        problems: [
          { name: 'IndiaBIX - Simple Interest', url: 'https://www.indiabix.com/aptitude/simple-interest/' },
          { name: 'PrepInsta - Simple Interest', url: 'https://prepinsta.com/quantitative-aptitude/simple-interest/' }
        ]
      },
      { id: 'q5', title: 'Ratios', duration: '2h', topics: ['Ratio', 'Proportion'],
        notes: [
          { name: 'Khan Academy - Ratios', url: 'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages/cc-6th-ratios-intro/v/introduction-to-ratios-new-hd-version' }
        ],
        problems: [
          { name: 'IndiaBIX - Ratio', url: 'https://www.indiabix.com/aptitude/ratio-and-proportion/' }
        ]
      },
      { id: 'q6', title: 'Time & Work', duration: '2.5h', topics: ['Work Rate', 'Combined'],
        notes: [
          { name: 'GeeksforGeeks - Time Work', url: 'https://www.geeksforgeeks.org/time-and-work/' }
        ],
        problems: [
          { name: 'IndiaBIX - Time Work', url: 'https://www.indiabix.com/aptitude/time-and-work/' },
          { name: 'PrepInsta - Time Work', url: 'https://prepinsta.com/quantitative-aptitude/time-and-work/' }
        ]
      },
      { id: 'q7', title: 'Speed & Distance', duration: '2.5h', topics: ['Speed', 'Distance'],
        notes: [
          { name: 'GeeksforGeeks - Speed Distance', url: 'https://www.geeksforgeeks.org/time-speed-distance/' }
        ],
        problems: [
          { name: 'IndiaBIX - Speed Distance', url: 'https://www.indiabix.com/aptitude/time-and-distance/' },
          { name: 'PrepInsta - Speed Distance', url: 'https://prepinsta.com/quantitative-aptitude/time-speed-and-distance/' }
        ]
      },
      { id: 'q8', title: 'Averages', duration: '1.5h', topics: ['Mean', 'Weighted Avg'],
        notes: [
          { name: 'GeeksforGeeks - Average', url: 'https://www.geeksforgeeks.org/average/' }
        ],
        problems: [
          { name: 'IndiaBIX - Average', url: 'https://www.indiabix.com/aptitude/average/' },
          { name: 'PrepInsta - Average', url: 'https://prepinsta.com/quantitative-aptitude/average/' }
        ]
      }
    ],
    reasoning: [
      { id: 'r1', title: 'Number Series', duration: '2h', topics: ['Patterns', 'Sequences'],
        notes: [
          { name: 'GeeksforGeeks - Number Series', url: 'https://www.geeksforgeeks.org/number-series/' }
        ],
        problems: [
          { name: 'IndiaBIX - Number Series', url: 'https://www.indiabix.com/logical-reasoning/number-series/' },
          { name: 'PrepInsta - Series', url: 'https://prepinsta.com/logical-reasoning/series/' }
        ]
      },
      { id: 'r2', title: 'Letter Series', duration: '1.5h', topics: ['Alphabets', 'Patterns'],
        notes: [
          { name: 'GeeksforGeeks - Letter Series', url: 'https://www.geeksforgeeks.org/letter-series/' }
        ],
        problems: [
          { name: 'IndiaBIX - Letter Series', url: 'https://www.indiabix.com/logical-reasoning/letter-series/' },
          { name: 'PrepInsta - Alphabet', url: 'https://prepinsta.com/logical-reasoning/alphabet-test/' }
        ]
      },
      { id: 'r3', title: 'Analogies', duration: '2h', topics: ['Number', 'Letter'],
        notes: [
          { name: 'GeeksforGeeks - Analogies', url: 'https://www.geeksforgeeks.org/analogies/' }
        ],
        problems: [
          { name: 'IndiaBIX - Analogies', url: 'https://www.indiabix.com/logical-reasoning/analogies/' },
          { name: 'PrepInsta - Analogy', url: 'https://prepinsta.com/logical-reasoning/analogy/' }
        ]
      },
      { id: 'r4', title: 'Odd One Out', duration: '1.5h', topics: ['Classification'],
        notes: [
          { name: 'GeeksforGeeks - Classification', url: 'https://www.geeksforgeeks.org/classification/' }
        ],
        problems: [
          { name: 'IndiaBIX - Odd One Out', url: 'https://www.indiabix.com/logical-reasoning/odd-man-out-and-series/' }
        ]
      },
      { id: 'r5', title: 'Coding-Decoding', duration: '2h', topics: ['Letter Coding', 'Number'],
        notes: [
          { name: 'GeeksforGeeks - Coding Decoding', url: 'https://www.geeksforgeeks.org/coding-decoding/' }
        ],
        problems: [
          { name: 'IndiaBIX - Coding Decoding', url: 'https://www.indiabix.com/logical-reasoning/coding-decoding/' },
          { name: 'PrepInsta - Coding Decoding', url: 'https://prepinsta.com/logical-reasoning/coding-and-decoding/' }
        ]
      },
      { id: 'r6', title: 'Blood Relations', duration: '2h', topics: ['Family Tree', 'Relations'],
        notes: [
          { name: 'GeeksforGeeks - Blood Relations', url: 'https://www.geeksforgeeks.org/blood-relations/' }
        ],
        problems: [
          { name: 'IndiaBIX - Blood Relations', url: 'https://www.indiabix.com/logical-reasoning/blood-relation-test/' },
          { name: 'PrepInsta - Blood Relations', url: 'https://prepinsta.com/logical-reasoning/blood-relations/' }
        ]
      },
      { id: 'r7', title: 'Direction Sense', duration: '1.5h', topics: ['Directions', 'Distance'],
        notes: [
          { name: 'GeeksforGeeks - Direction Sense', url: 'https://www.geeksforgeeks.org/direction-sense-test/' }
        ],
        problems: [
          { name: 'IndiaBIX - Direction Sense', url: 'https://www.indiabix.com/logical-reasoning/direction-sense-test/' },
          { name: 'PrepInsta - Direction', url: 'https://prepinsta.com/logical-reasoning/direction-sense/' }
        ]
      },
      { id: 'r8', title: 'Puzzles', duration: '2h', topics: ['Logic', 'Problem Solving'],
        notes: [
          { name: 'GeeksforGeeks - Puzzles', url: 'https://www.geeksforgeeks.org/puzzles/' }
        ],
        problems: [
          { name: 'IndiaBIX - Puzzles', url: 'https://www.indiabix.com/logical-reasoning/' },
          { name: 'PrepInsta - Puzzles', url: 'https://prepinsta.com/logical-reasoning/' }
        ]
      }
    ],
    communication: [
      { id: 'cm1', title: 'Grammar Basics', duration: '2h', topics: ['Tenses', 'Parts of Speech'],
        notes: [
          { name: 'Grammarly - Grammar', url: 'https://www.grammarly.com/blog/category/handbook/' },
          { name: 'GeeksforGeeks - Grammar', url: 'https://www.geeksforgeeks.org/english-grammar/' }
        ],
        problems: [
          { name: 'IndiaBIX - Grammar', url: 'https://www.indiabix.com/verbal-ability/spotting-errors/' }
        ]
      },
      { id: 'cm2', title: 'Vocabulary', duration: '2h', topics: ['Synonyms', 'Antonyms'],
        notes: [
          { name: 'Vocabulary.com', url: 'https://www.vocabulary.com/' }
        ],
        problems: [
          { name: 'IndiaBIX - Synonyms', url: 'https://www.indiabix.com/verbal-ability/synonyms/' },
          { name: 'IndiaBIX - Antonyms', url: 'https://www.indiabix.com/verbal-ability/antonyms/' }
        ]
      },
      { id: 'cm3', title: 'Sentence Formation', duration: '1.5h', topics: ['Structure', 'Order'],
        notes: [
          { name: 'GeeksforGeeks - Sentence', url: 'https://www.geeksforgeeks.org/sentence-improvement/' }
        ],
        problems: [
          { name: 'IndiaBIX - Sentence', url: 'https://www.indiabix.com/verbal-ability/sentence-improvement/' }
        ]
      },
      { id: 'cm4', title: 'Comprehension', duration: '2.5h', topics: ['Reading', 'Understanding'],
        notes: [
          { name: 'GeeksforGeeks - RC', url: 'https://www.geeksforgeeks.org/reading-comprehension/' }
        ],
        problems: [
          { name: 'IndiaBIX - Comprehension', url: 'https://www.indiabix.com/verbal-ability/comprehension/' },
          { name: 'PrepInsta - RC', url: 'https://prepinsta.com/verbal-ability/reading-comprehension/' }
        ]
      },
      { id: 'cm5', title: 'Spotting Errors', duration: '2h', topics: ['Grammar Errors'],
        notes: [
          { name: 'GeeksforGeeks - Error Detection', url: 'https://www.geeksforgeeks.org/error-detection/' }
        ],
        problems: [
          { name: 'IndiaBIX - Errors', url: 'https://www.indiabix.com/verbal-ability/spotting-errors/' }
        ]
      },
      { id: 'cm6', title: 'Fill in Blanks', duration: '1.5h', topics: ['Context', 'Word Choice'],
        notes: [
          { name: 'GeeksforGeeks - Fill Blanks', url: 'https://www.geeksforgeeks.org/fill-blanks/' }
        ],
        problems: [
          { name: 'IndiaBIX - Fill Blanks', url: 'https://www.indiabix.com/verbal-ability/sentence-completion/' },
          { name: 'PrepInsta - Fill Blanks', url: 'https://prepinsta.com/verbal-ability/sentence-completion/' }
        ]
      },
      { id: 'cm7', title: 'Para Jumbles', duration: '2h', topics: ['Rearrangement', 'Flow'],
        notes: [
          { name: 'GeeksforGeeks - Para Jumbles', url: 'https://www.geeksforgeeks.org/para-jumbles/' }
        ],
        problems: [
          { name: 'IndiaBIX - Para Jumbles', url: 'https://www.indiabix.com/verbal-ability/paragraph-formation/' },
          { name: 'PrepInsta - Para Jumbles', url: 'https://prepinsta.com/verbal-ability/para-jumbles/' }
        ]
      },
      { id: 'cm8', title: 'Idioms', duration: '1.5h', topics: ['Phrases', 'Meanings'],
        notes: [
          { name: 'The Idioms', url: 'https://www.theidioms.com/' }
        ],
        problems: [
          { name: 'IndiaBIX - Idioms', url: 'https://www.indiabix.com/verbal-ability/idioms-and-phrases/' }
        ]
      }
    ]
  };

  const timeline = [
    { month: 'Oct 2024', tasks: 'Master Basics', status: 'complete' },
    { month: 'Nov-Dec 2024', tasks: 'Practice & Build', status: 'current' },
    { month: 'Jan-Feb 2025', tasks: 'Mock Tests', status: 'upcoming' },
    { month: 'Mar-Apr 2025', tasks: 'Final Prep', status: 'upcoming' },
    { month: 'May-Jun 2025', tasks: 'Placements', status: 'upcoming' }
  ];

  const toggleComplete = (id) => {
    setCompletedLessons(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const addCustomLesson = () => {
    if (newLesson.title && newLesson.duration) {
      const topics = newLesson.topics.split(',').map(t => t.trim()).filter(t => t);
      const urls = newLesson.resources.split(',').map(r => r.trim()).filter(r => r);

      const lesson = {
        id: `custom_${Date.now()}`,
        title: newLesson.title,
        duration: newLesson.duration,
        topics: topics.length ? topics : ['Custom'],
        notes: urls.map((u, i) => ({ name: `Resource ${i + 1}`, url: u })),
        problems: [],
        custom: true
      };

      setCustomLessons(prev => ({
        ...prev,
        [selectedCategory]: [...prev[selectedCategory], lesson]
      }));

      setNewLesson({ title: '', duration: '', topics: '', resources: '' });
      setShowAddLesson(false);
    }
  };

  const deleteLesson = (id) => {
    setCustomLessons(prev => ({
      ...prev,
      [selectedCategory]: prev[selectedCategory].filter(l => l.id !== id)
    }));
  };

  const allLessons = (cat) => [...courses[cat], ...customLessons[cat]];

  const getProgress = (cat) => {
    const all = allLessons(cat);
    const done = all.filter(l => completedLessons[l.id]).length;
    return all.length ? Math.round((done / all.length) * 100) : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">

        <header className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-10 h-10 text-cyan-400" />
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Placement Prep - Beginner Level
                </h1>
              </div>
              <p className="text-slate-400">Master fundamentals with curated resources</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end mb-1">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-slate-400">Target: 2025</span>
              </div>
              <div className="text-xl font-bold text-cyan-400">Build Strong Foundation</div>
            </div>
          </div>
        </header>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map(cat => {
            const Icon = cat.icon;
            const progress = getProgress(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-xl transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-br from-slate-700 to-slate-800 ring-2 ring-cyan-400 scale-105'
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${
                  selectedCategory === cat.id ? 'text-cyan-400' : 'text-slate-400'
                }`} />
                <div className="font-semibold mb-1 text-sm">{cat.name}</div>
              </button>
            );
          })}
        </div>

        {activeView === 'courses' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Award className="w-6 h-6 text-green-400" />
                Beginner Topics
              </h2>
              <button
                onClick={() => setShowAddLesson(true)}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition-all"
              >
                <Plus className="w-5 h-5" />
                Add Topic
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {allLessons(selectedCategory).map((lesson) => {
                const done = completedLessons[lesson.id];

                return (
                  <div
                    key={lesson.id}
                    className={`p-5 rounded-xl border transition-all ${
                      done
                        ? 'bg-green-900/20 border-green-500/50'
                        : 'bg-slate-800 border-slate-700 hover:border-cyan-400'
                    }`}
                  >
                    <div className="flex justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{lesson.title}</h3>
                          {lesson.custom && (
                            <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded">Custom</span>
                          )}
                        </div>
                        <p className="text-sm text-slate-400">{lesson.duration}</p>
                      </div>
                      <div className="flex gap-2 ml-2">
                        <button onClick={() => toggleComplete(lesson.id)}>
                          <CheckCircle className={`w-6 h-6 ${
                            done ? 'text-green-400 fill-green-400' : 'text-slate-600 hover:text-slate-500'
                          }`} />
                        </button>
                        {lesson.custom && (
                          <button onClick={() => deleteLesson(lesson.id)} className="text-red-400 hover:text-red-300">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-cyan-400 mb-2">Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {lesson.topics.map((t, i) => (
                          <span key={i} className="text-xs bg-slate-700 px-2 py-1 rounded">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mb-3">
                      {lesson.notes && ((Array.isArray(lesson.notes) && lesson.notes.length > 0) || (typeof lesson.notes === 'object' && !Array.isArray(lesson.notes))) && (
                        <button
                          onClick={() => setShowNotesFor(showNotesFor === lesson.id ? null : lesson.id)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-all text-sm font-semibold text-blue-300"
                        >
                          <FileText className="w-4 h-4" />
                          {selectedCategory === 'coding' && typeof lesson.notes === 'object' && !Array.isArray(lesson.notes) ?
                            'Notes (5 Languages)' :
                            `Notes (${Array.isArray(lesson.notes) ? lesson.notes.length : 0})`
                          }
                        </button>
                      )}
                      {lesson.problems && lesson.problems.length > 0 && (
                        <button
                          onClick={() => setShowProblemsFor(showProblemsFor === lesson.id ? null : lesson.id)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg hover:bg-green-500/30 transition-all text-sm font-semibold text-green-300"
                        >
                          <Code className="w-4 h-4" />
                          Problems ({lesson.problems.length})
                        </button>
                      )}
                    </div>

                    {showNotesFor === lesson.id && lesson.notes && (
                      <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg mb-3">
                        {selectedCategory === 'coding' && typeof lesson.notes === 'object' && !Array.isArray(lesson.notes) ? (
                          <>
                            <h4 className="text-xs font-semibold text-blue-400 mb-3">Select Programming Language:</h4>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {languages.map(lang => (
                                <button
                                  key={lang.id}
                                  onClick={() => setSelectedLanguage(lang.id)}
                                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                    selectedLanguage === lang.id
                                      ? 'bg-blue-500 text-white'
                                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                  }`}
                                >
                                  <span>{lang.icon}</span>
                                  <span>{lang.name}</span>
                                </button>
                              ))}
                            </div>
                            <h4 className="text-xs font-semibold text-blue-400 mb-2">Learning Notes ({selectedLanguage.toUpperCase()}):</h4>
                            <div className="space-y-2">
                              {lesson.notes[selectedLanguage]?.map((n, i) => (
                                <a
                                  key={i}
                                  href={n.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between p-2 bg-slate-900/50 rounded hover:bg-slate-900 transition-all group"
                                >
                                  <span className="text-sm group-hover:text-blue-300">{n.name}</span>
                                  <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                                </a>
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            <h4 className="text-xs font-semibold text-blue-400 mb-2">Learning Notes:</h4>
                            <div className="space-y-2">
                              {(Array.isArray(lesson.notes) ? lesson.notes : []).map((n, i) => (
                                <a
                                  key={i}
                                  href={n.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between p-2 bg-slate-900/50 rounded hover:bg-slate-900 transition-all group"
                                >
                                  <span className="text-sm group-hover:text-blue-300">{n.name}</span>
                                  <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                                </a>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {showProblemsFor === lesson.id && lesson.problems && (
                      <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                        <h4 className="text-xs font-semibold text-green-400 mb-2">Practice Problems:</h4>
                        <div className="space-y-2">
                          {lesson.problems.map((p, i) => (
                            <a
                              key={i}
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-2 bg-slate-900/50 rounded hover:bg-slate-900 transition-all group"
                            >
                              <span className="text-sm group-hover:text-green-300">{p.name}</span>
                              <ExternalLink className="w-4 h-4 text-green-400 group-hover:text-green-300" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {lesson.id === 'c5' && (
                      <div className="mt-3 p-4 bg-gradient-to-br from-orange-900/30 to-slate-800 border-2 border-orange-500/50 rounded-xl">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-5 h-5 text-orange-400" />
                          <h4 className="font-bold text-orange-400">CodeChef Practice Arena</h4>
                        </div>
                        <p className="text-sm text-slate-300 mb-3">Start solving beginner-friendly problems (Rating: 200-800)</p>

                        <div className="space-y-2">
                          <a
                            href="https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=200&end_rating=800&topic=&tags=&group=&language=C"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-blue-900/40 border border-blue-500/40 rounded-lg hover:bg-blue-900/60 transition-all group"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">🔵</span>
                              <span className="font-semibold text-blue-300 group-hover:text-blue-200">C Language Problems</span>
                            </div>
                            <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                          </a>

                          <a
                            href="https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=200&end_rating=800&topic=&tags=&group=&language=Java"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-orange-900/40 border border-orange-500/40 rounded-lg hover:bg-orange-900/60 transition-all group"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">☕</span>
                              <span className="font-semibold text-orange-300 group-hover:text-orange-200">Java Problems</span>
                            </div>
                            <ExternalLink className="w-5 h-5 text-orange-400 group-hover:text-orange-300" />
                          </a>

                          <a
                            href="https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=200&end_rating=800&topic=&tags=&group=&language=Python"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-green-900/40 border border-green-500/40 rounded-lg hover:bg-green-900/60 transition-all group"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">🐍</span>
                              <span className="font-semibold text-green-300 group-hover:text-green-200">Python Problems</span>
                            </div>
                            <ExternalLink className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                          </a>
                        </div>

                        <div className="mt-3 p-2 bg-orange-500/10 rounded-lg">
                          <p className="text-xs text-orange-200"><strong>Tip:</strong> Start with easier problems and gradually increase difficulty!</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}


        {showAddLesson && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={() => setShowAddLesson(false)}>
            <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full border border-slate-700" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Add Custom Topic</h2>
                <button onClick={() => setShowAddLesson(false)} className="text-slate-400 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Title</label>
                  <input
                    type="text"
                    value={newLesson.title}
                    onChange={(e) => setNewLesson({...newLesson, title: e.target.value})}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                    placeholder="e.g., Graph Algorithms"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Duration</label>
                  <input
                    type="text"
                    value={newLesson.duration}
                    onChange={(e) => setNewLesson({...newLesson, duration: e.target.value})}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                    placeholder="e.g., 2.5h"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Topics (comma-separated)</label>
                  <input
                    type="text"
                    value={newLesson.topics}
                    onChange={(e) => setNewLesson({...newLesson, topics: e.target.value})}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                    placeholder="e.g., DFS, BFS, Dijkstra"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Resource URLs (comma-separated)</label>
                  <textarea
                    value={newLesson.resources}
                    onChange={(e) => setNewLesson({...newLesson, resources: e.target.value})}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:border-cyan-400 focus:outline-none text-white"
                    placeholder="e.g., https://leetcode.com/tag/graph/"
                    rows={3}
                  />
                </div>

                <button
                  onClick={addCustomLesson}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
                >
                  Add Topic
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPlatform;
