<?php

require './functions.php';

// Example Case
$N = 5;
$a = [2, 3, 1, 2, 3];
$output = findDuplicates($a);
echo "Output: " . implode(' ', $output) . "\n";