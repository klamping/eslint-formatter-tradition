const TRADITION = `TTTTTT    RRRR      AA     DDD     III    TTTTTT    III     OOO     N   N    !!!
  TT      R   R    A  A    D  D     I       TT       I     O   O    NN  N    !!!
  TT      RRRR     AAAA    D  D     I       TT       I     O   O    N N N    !!!
  TT      R R      A  A    D  D     I       TT       I     O   O    N  NN
  TT      R  RR    A  A    DDD     III      TT      III     OOO     N   N    !!!`

const FIDDLER = `
MMMMMMMMMMMMMO lMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMo  oMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMl,dNMMMMM
MMMMMMMMMMK,  ,XMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK.  lMMMMM
MMMMMMMKx:   .0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0;   dMMMM
MMMMMM0        ;OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0dd.   dMMM
MMMMMW,         .0MMMMMMMMMMMMMMMMMMMMMKl,'...'coOWMMMMMMMMMMMMMMMMMc        lMM
MMMMMd         lWMMMMMMMMMMMMMMMMMMMMd.           .dNMMMMMMMMMMMMMN:         .NM
MMMMK.       .KMMMMMMMMMMMMMMMMMMMMMk               .kWMMMMMMMMMMMWd.        .XM
MMMX.       .KMMMMMMMMMMMMMMMMMMMMMO.                 ,XMMMMMMMMMMMMWx        0M
MMX.      .xNMMMMMMMMMMMMMMMMMMMMMMk                   oMMMMMMMMMMMMMM,       oM
MK.      ,WMMMMMMMMMMMMMMMMMMMMMMMMx                   oMMMMMMMMMMMMMMO.      .N
M0.      dMMMMMMMMMMMMMMMMMMMMMMMMK                    0MMMMMMMMMMMMMMMd       o
,        'WMMMMMMMMMMMMMMMMMMMMMMMK                   cMMMMMMMMMMMMMMMMN.
         ,MMMMMMMMMMMMMMMMMMMMMMMMo                   ;MMMMMMMMMMMMMMMMW'
         ,MMMMMMMMMMMMMMMMMMMMMMMM:                   .XMMMMMMMMMMMMMMMM:
         .WMMMMMMMMMMMMMMMMMMMMMMX.                  ,XMMMMMMMMMMMMMMMMMx
         .WMMMMMMMMMMMMMMMWMMMMMMK                  '0MMMMMMMMMMMMMMMMMMk
          xMMMMMMMMWXKKKd,.':''cdc                   cXMMMMMWNWMMMMMMMMMk
          .xKKOk0O:.                                  .:dxx:.  'lkOk0WMMc
                                                                     .xK:




0xc'
MMMMWKdc:'.
MMMMMMMMMMMNOxl;.                                                              .
MMMMMMMMMMMMMMMMM0                                                        .;oOXW
MMMMMMMMMMMMMMMMMl                                                  .':oOXMMMMMM
MMMMMMMMMMMMMMMMX.                                                 .WMMMMMMMMMMM
MMMMMMMMMMMMMMMMc                                                   xMMMMMMMMMMM
MMMMMMMMMMMMMMM0                                                    ,WMMMMMMMMMM
MMMMMMMMMMMMMMN'                                                     oMMMMMMMMMM
MMMMMMMMMMMMMMo                                                      .NMMMMMMMMM
MMMMMMMMMMMMMK.                                                       dMMMMMMMMM
MMMMMMMMMMMNo                                                         'WMMMMMMMM
MMMMMMMMMW0.                                                           oMMMMMMMM
MMMMMMMMMx                                                              oWMMMMMM
MMMMMMMMN'                                                               :WMMMMM
MMMMMMMM:                                                                 dMMMMM
`

module.exports = function(results) {
  if (results.length > 1 || results[0].errorCount || results[0].warningCount ) {
    console.log(TRADITION);
    console.log(FIDDLER);
  } else {
  	console.log("A fiddler on the roof. Sounds crazy, no?");
  }
}
