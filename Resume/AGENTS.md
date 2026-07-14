# Resume workflow

After every completed edit to `latex.tex`, run the following command from `/Users/rajmaheshwari/Documents/MYSELF/rajworking.github.io`:

```sh
/Users/rajmaheshwari/.codex/skills/compile-resume/scripts/compile_resume.sh Resume/latex.tex
```

Do not wait for a separate compile request. Treat a LaTeX edit as incomplete until the command succeeds and `Raj_Maheshwari_Resume.pdf` is nonempty. If compilation fails, fix the LaTeX error introduced by the edit and recompile.

Do not compile with `latexmk` directly. The compile script builds in a temporary directory and removes its auxiliary files automatically. After compilation, the Resume directory should contain no generated `latex.*` files other than the source `latex.tex`.

After every successful compile, run the PDF inspection workflow:

```sh
/Users/rajmaheshwari/.codex/skills/review-latex/scripts/inspect_pdf.sh /Users/rajmaheshwari/Documents/MYSELF/rajworking.github.io/Resume/Raj_Maheshwari_Resume.pdf
```

Read the extracted text and visually inspect every rendered page. Check for overlaps, clipping, missing content, awkward spacing, inconsistent alignment, and unexpected page-count changes. If a formatting-only correction is needed, edit `latex.tex`, recompile, and inspect again until the PDF is clean. Never make substantive cuts or rewrites merely to fit the page; ask the user what to shorten or remove if content cannot fit cleanly.
