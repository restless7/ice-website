# Graph Report - .  (2026-09-27)

## Corpus Check
- Large corpus: 337 files · ~8,668,649 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 554 nodes · 736 edges · 15 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 337 · Candidates: 591
- Excluded: 63 untracked · 9324 ignored · 0 sensitive · 11 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.
## God Nodes (most connected - your core abstractions)
1. `extractProgramData()` - 11 edges
2. `portalFetch()` - 10 edges
3. `useTranslations()` - 9 edges
4. `RequestManager` - 8 edges
5. `resetForm()` - 5 edges
6. `clearAuth()` - 5 edges
7. `handleWebSocketMessage()` - 4 edges
8. `addSystemMessage()` - 4 edges
9. `fetchArticles()` - 4 edges
10. `getStoredToken()` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (2): findTaskById(), handleEditClick()

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (18): clearAuth(), getSponsorStudents(), getStoredToken(), getStudentDocuments(), getStudentPlacements(), getStudentProfile(), getStudentProgress(), getStudentRefunds() (+10 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (4): createThemeCSS(), createThemeVariables(), useTheme(), useThemeClasses()

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (5): addToRemoveQueue(), dispatch(), genId(), reducer(), toast()

### Community 7 - "Community 7"
Cohesion: 0.14
Nodes (5): handlePrimaryAction(), handleSecondaryAction(), scrollToSection(), getPriorityBadge(), getStatusBadge()

### Community 8 - "Community 8"
Cohesion: 0.12
Nodes (4): deleteArticle(), fetchArticles(), updateArticle(), uploadDocument()

### Community 9 - "Community 9"
Cohesion: 0.16
Nodes (12): useCriticalTranslations(), useHeroCriticalTranslations(), useCommonTranslations(), useCompanyTranslations(), useCreatorFunnelTranslations(), useDevelopersTranslations(), useHomeTranslations(), useLegacyTranslations() (+4 more)

### Community 11 - "Community 11"
Cohesion: 0.13
Nodes (3): handlePrimaryAction(), handleSecondaryAction(), scrollToSection()

### Community 12 - "Community 12"
Cohesion: 0.13
Nodes (4): checkCompletion(), handleSubmitExam(), checkCompletion(), handleSubmitExam()

### Community 13 - "Community 13"
Cohesion: 0.19
Nodes (5): closeDay(), handleDelete(), handleSaveSession(), openDay(), resetForm()

### Community 14 - "Community 14"
Cohesion: 0.29
Nodes (13): cleanText(), determineCategory(), extractDuration(), extractHighlights(), extractPriceInfo(), extractProcessingSteps(), extractProgramData(), extractProgramName() (+5 more)

### Community 15 - "Community 15"
Cohesion: 0.27
Nodes (9): addBellaMessage(), addSystemMessage(), addUserMessage(), connectToVoiceWebSocket(), handleWebSocketMessage(), initializeBellaConversation(), playAudioDelta(), startListening() (+1 more)

### Community 16 - "Community 16"
Cohesion: 0.22
Nodes (2): handleSubmit(), validateForm()

### Community 18 - "Community 18"
Cohesion: 0.36
Nodes (1): RequestManager

### Community 20 - "Community 20"
Cohesion: 0.33
Nodes (2): createLeadOnly(), registerForCharla()

## Knowledge Gaps
- **Thin community `Community 0`** (2 nodes): `findTaskById()`, `handleEditClick()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (2 nodes): `handleSubmit()`, `validateForm()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (1 nodes): `RequestManager`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (2 nodes): `createLeadOnly()`, `registerForCharla()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `RequestManager` connect `Community 18` to `Community 4`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._