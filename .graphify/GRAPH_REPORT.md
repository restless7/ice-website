# Graph Report - packages/ice-website  (2026-05-04)

## Corpus Check
- Large corpus: 288 files · ~7,469,292 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 493 nodes · 651 edges · 13 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 288 · Candidates: 329
- Excluded: 0 untracked · 10179 ignored · 0 sensitive · 8 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.
## God Nodes (most connected - your core abstractions)
1. `extractProgramData()` - 11 edges
2. `portalFetch()` - 10 edges
3. `useTranslations()` - 9 edges
4. `RequestManager` - 8 edges
5. `resetForm()` - 5 edges
6. `handleWebSocketMessage()` - 4 edges
7. `addSystemMessage()` - 4 edges
8. `fetchArticles()` - 4 edges
9. `clearAuth()` - 4 edges
10. `getAllProgramData()` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (7): handlePrimaryAction(), handleSecondaryAction(), scrollToSection(), getPriorityBadge(), getStatusBadge(), findTaskById(), handleEditClick()

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (2): handleSubmit(), validateForm()

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (17): clearAuth(), getSponsorStudents(), getStoredToken(), getStudentDocuments(), getStudentPlacements(), getStudentProfile(), getStudentProgress(), getStudentRefunds() (+9 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (4): createThemeCSS(), createThemeVariables(), useTheme(), useThemeClasses()

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (5): addToRemoveQueue(), dispatch(), genId(), reducer(), toast()

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (4): deleteArticle(), fetchArticles(), updateArticle(), uploadDocument()

### Community 7 - "Community 7"
Cohesion: 0.16
Nodes (12): useCriticalTranslations(), useHeroCriticalTranslations(), useCommonTranslations(), useCompanyTranslations(), useCreatorFunnelTranslations(), useDevelopersTranslations(), useHomeTranslations(), useLegacyTranslations() (+4 more)

### Community 9 - "Community 9"
Cohesion: 0.13
Nodes (3): handlePrimaryAction(), handleSecondaryAction(), scrollToSection()

### Community 11 - "Community 11"
Cohesion: 0.19
Nodes (5): closeDay(), handleDelete(), handleSaveSession(), openDay(), resetForm()

### Community 12 - "Community 12"
Cohesion: 0.29
Nodes (13): cleanText(), determineCategory(), extractDuration(), extractHighlights(), extractPriceInfo(), extractProcessingSteps(), extractProgramData(), extractProgramName() (+5 more)

### Community 13 - "Community 13"
Cohesion: 0.27
Nodes (9): addBellaMessage(), addSystemMessage(), addUserMessage(), connectToVoiceWebSocket(), handleWebSocketMessage(), initializeBellaConversation(), playAudioDelta(), startListening() (+1 more)

### Community 15 - "Community 15"
Cohesion: 0.25
Nodes (2): checkCompletion(), handleSubmitExam()

### Community 16 - "Community 16"
Cohesion: 0.36
Nodes (1): RequestManager

## Knowledge Gaps
- **Thin community `Community 1`** (2 nodes): `handleSubmit()`, `validateForm()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (2 nodes): `checkCompletion()`, `handleSubmitExam()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (1 nodes): `RequestManager`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `RequestManager` connect `Community 16` to `Community 4`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.04 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.04 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._