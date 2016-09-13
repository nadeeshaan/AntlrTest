// Generated from NEL.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NELListener = require('./NELListener').NELListener;
var grammarFileName = "NEL.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003c\u0240\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0003",
    "\u0002\u0003\u0002\u0007\u0002Y\n\u0002\f\u0002\u000e\u0002\\\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0006\u0003b",
    "\n\u0003\r\u0003\u000e\u0003c\u0005\u0003f\n\u0003\u0003\u0003\u0003",
    "\u0003\u0006\u0003j\n\u0003\r\u0003\u000e\u0003k\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0006\u0004s\n\u0004\r\u0004\u000e",
    "\u0004t\u0007\u0004w\n\u0004\f\u0004\u000e\u0004z\u000b\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005\u0083\n\u0005\u0003\u0006\u0003\u0006\u0006\u0006",
    "\u0087\n\u0006\r\u0006\u000e\u0006\u0088\u0003\u0006\u0003\u0006\u0006",
    "\u0006\u008d\n\u0006\r\u0006\u000e\u0006\u008e\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0097\n",
    "\u0007\u0003\b\u0003\b\u0006\b\u009b\n\b\r\b\u000e\b\u009c\u0003\b\u0003",
    "\b\u0006\b\u00a1\n\b\r\b\u000e\b\u00a2\u0003\b\u0003\b\u0006\b\u00a7",
    "\n\b\r\b\u000e\b\u00a8\u0003\b\u0003\b\u0003\t\u0003\t\u0006\t\u00af",
    "\n\t\r\t\u000e\t\u00b0\u0003\t\u0003\t\u0006\t\u00b5\n\t\r\t\u000e\t",
    "\u00b6\u0003\t\u0003\t\u0006\t\u00bb\n\t\r\t\u000e\t\u00bc\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0006\n\u00c3\n\n\r\n\u000e\n\u00c4\u0003\n\u0003",
    "\n\u0006\n\u00c9\n\n\r\n\u000e\n\u00ca\u0003\n\u0003\n\u0006\n\u00cf",
    "\n\n\r\n\u000e\n\u00d0\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0006",
    "\u000b\u00d7\n\u000b\r\u000b\u000e\u000b\u00d8\u0003\u000b\u0003\u000b",
    "\u0006\u000b\u00dd\n\u000b\r\u000b\u000e\u000b\u00de\u0003\u000b\u0003",
    "\u000b\u0006\u000b\u00e3\n\u000b\r\u000b\u000e\u000b\u00e4\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0006\r",
    "\u00ef\n\r\r\r\u000e\r\u00f0\u0003\r\u0003\r\u0007\r\u00f5\n\r\f\r\u000e",
    "\r\u00f8\u000b\r\u0003\r\u0003\r\u0007\r\u00fc\n\r\f\r\u000e\r\u00ff",
    "\u000b\r\u0003\r\u0003\r\u0003\r\u0007\r\u0104\n\r\f\r\u000e\r\u0107",
    "\u000b\r\u0003\r\u0003\r\u0006\r\u010b\n\r\r\r\u000e\r\u010c\u0003\u000e",
    "\u0003\u000e\u0006\u000e\u0111\n\u000e\r\u000e\u000e\u000e\u0112\u0007",
    "\u000e\u0115\n\u000e\f\u000e\u000e\u000e\u0118\u000b\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u0122\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u0128\n\u0011\u0003\u0011\u0005\u0011",
    "\u012b\n\u0011\u0003\u0011\u0005\u0011\u012e\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0007\u0012\u0133\n\u0012\f\u0012\u000e\u0012\u0136",
    "\u000b\u0012\u0003\u0012\u0007\u0012\u0139\n\u0012\f\u0012\u000e\u0012",
    "\u013c\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0145\n\u0013\u0003\u0013",
    "\u0005\u0013\u0148\n\u0013\u0003\u0013\u0007\u0013\u014b\n\u0013\f\u0013",
    "\u000e\u0013\u014e\u000b\u0013\u0003\u0013\u0005\u0013\u0151\n\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0007\u0015\u015f\n\u0015\f\u0015\u000e\u0015\u0162\u000b\u0015\u0003",
    "\u0015\u0005\u0015\u0165\n\u0015\u0003\u0015\u0005\u0015\u0168\n\u0015",
    "\u0003\u0015\u0007\u0015\u016b\n\u0015\f\u0015\u000e\u0015\u016e\u000b",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007",
    "\u0017\u017b\n\u0017\f\u0017\u000e\u0017\u017e\u000b\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0007\u0019\u018b\n",
    "\u0019\f\u0019\u000e\u0019\u018e\u000b\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0006\u001b\u0196\n",
    "\u001b\r\u001b\u000e\u001b\u0197\u0003\u001b\u0003\u001b\u0006\u001b",
    "\u019c\n\u001b\r\u001b\u000e\u001b\u019d\u0003\u001b\u0003\u001b\u0006",
    "\u001b\u01a2\n\u001b\r\u001b\u000e\u001b\u01a3\u0003\u001b\u0003\u001b",
    "\u0006\u001b\u01a8\n\u001b\r\u001b\u000e\u001b\u01a9\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0005\u001c\u01b0\n\u001c\u0003\u001d",
    "\u0003\u001d\u0006\u001d\u01b4\n\u001d\r\u001d\u000e\u001d\u01b5\u0003",
    "\u001d\u0003\u001d\u0006\u001d\u01ba\n\u001d\r\u001d\u000e\u001d\u01bb",
    "\u0003\u001d\u0003\u001d\u0007\u001d\u01c0\n\u001d\f\u001d\u000e\u001d",
    "\u01c3\u000b\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u01c7\n\u001d",
    "\f\u001d\u000e\u001d\u01ca\u000b\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0007\u001e\u01d0\n\u001e\f\u001e\u000e\u001e\u01d3",
    "\u000b\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0006\u001f",
    "\u01d9\n\u001f\r\u001f\u000e\u001f\u01da\u0003\u001f\u0003\u001f\u0006",
    "\u001f\u01df\n\u001f\r\u001f\u000e\u001f\u01e0\u0003\u001f\u0003\u001f",
    "\u0007\u001f\u01e5\n\u001f\f\u001f\u000e\u001f\u01e8\u000b\u001f\u0003",
    "\u001f\u0003\u001f\u0007\u001f\u01ec\n\u001f\f\u001f\u000e\u001f\u01ef",
    "\u000b\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0005 \u01f5\n \u0003",
    " \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0005!\u01fe\n!\u0003\"",
    "\u0003\"\u0003\"\u0006\"\u0203\n\"\r\"\u000e\"\u0204\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0005#\u020e\n#\u0003#\u0003#\u0003#\u0003",
    "$\u0003$\u0003%\u0003%\u0003%\u0003%\u0007%\u0219\n%\f%\u000e%\u021c",
    "\u000b%\u0003%\u0003%\u0003&\u0003&\u0003&\u0005&\u0223\n&\u0003\'\u0003",
    "\'\u0003\'\u0006\'\u0228\n\'\r\'\u000e\'\u0229\u0003(\u0003(\u0003(",
    "\u0003(\u0003(\u0005(\u0231\n(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003",
    ")\u0003)\u0005)\u023a\n)\u0003*\u0003*\u0003+\u0003+\u0003+\u0002\u0002",
    ",\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRT\u0002\u0003\u0003\u0002\u0006",
    "\b\u0267\u0002Z\u0003\u0002\u0002\u0002\u0004e\u0003\u0002\u0002\u0002",
    "\u0006x\u0003\u0002\u0002\u0002\b\u0082\u0003\u0002\u0002\u0002\n\u0084",
    "\u0003\u0002\u0002\u0002\f\u0096\u0003\u0002\u0002\u0002\u000e\u0098",
    "\u0003\u0002\u0002\u0002\u0010\u00ac\u0003\u0002\u0002\u0002\u0012\u00c0",
    "\u0003\u0002\u0002\u0002\u0014\u00d4\u0003\u0002\u0002\u0002\u0016\u00e8",
    "\u0003\u0002\u0002\u0002\u0018\u00ec\u0003\u0002\u0002\u0002\u001a\u0116",
    "\u0003\u0002\u0002\u0002\u001c\u0121\u0003\u0002\u0002\u0002\u001e\u0123",
    "\u0003\u0002\u0002\u0002 \u0125\u0003\u0002\u0002\u0002\"\u012f\u0003",
    "\u0002\u0002\u0002$\u013f\u0003\u0002\u0002\u0002&\u0154\u0003\u0002",
    "\u0002\u0002(\u015b\u0003\u0002\u0002\u0002*\u0171\u0003\u0002\u0002",
    "\u0002,\u0176\u0003\u0002\u0002\u0002.\u0181\u0003\u0002\u0002\u0002",
    "0\u0186\u0003\u0002\u0002\u00022\u0191\u0003\u0002\u0002\u00024\u0193",
    "\u0003\u0002\u0002\u00026\u01af\u0003\u0002\u0002\u00028\u01b1\u0003",
    "\u0002\u0002\u0002:\u01cd\u0003\u0002\u0002\u0002<\u01d6\u0003\u0002",
    "\u0002\u0002>\u01f2\u0003\u0002\u0002\u0002@\u01fa\u0003\u0002\u0002",
    "\u0002B\u0202\u0003\u0002\u0002\u0002D\u0206\u0003\u0002\u0002\u0002",
    "F\u0212\u0003\u0002\u0002\u0002H\u0214\u0003\u0002\u0002\u0002J\u021f",
    "\u0003\u0002\u0002\u0002L\u0227\u0003\u0002\u0002\u0002N\u022b\u0003",
    "\u0002\u0002\u0002P\u0235\u0003\u0002\u0002\u0002R\u023b\u0003\u0002",
    "\u0002\u0002T\u023d\u0003\u0002\u0002\u0002VY\u0005\u0004\u0003\u0002",
    "WY\u0007Z\u0002\u0002XV\u0003\u0002\u0002\u0002XW\u0003\u0002\u0002",
    "\u0002Y\\\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003",
    "\u0002\u0002\u0002[]\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002",
    "]^\u0007\u0002\u0002\u0003^\u0003\u0003\u0002\u0002\u0002_a\u0005R*",
    "\u0002`b\u0007Z\u0002\u0002a`\u0003\u0002\u0002\u0002bc\u0003\u0002",
    "\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002df\u0003",
    "\u0002\u0002\u0002e_\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002",
    "fg\u0003\u0002\u0002\u0002gi\u00077\u0002\u0002hj\u0007Z\u0002\u0002",
    "ih\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002",
    "\u0002kl\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0005\u0006",
    "\u0004\u0002no\u00078\u0002\u0002o\u0005\u0003\u0002\u0002\u0002pr\u0005",
    "\b\u0005\u0002qs\u0007Z\u0002\u0002rq\u0003\u0002\u0002\u0002st\u0003",
    "\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002",
    "uw\u0003\u0002\u0002\u0002vp\u0003\u0002\u0002\u0002wz\u0003\u0002\u0002",
    "\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y\u0007\u0003",
    "\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{\u0083\u0005\n\u0006\u0002",
    "|\u0083\u0005\f\u0007\u0002}\u0083\u0005<\u001f\u0002~\u0083\u0005\u0016",
    "\f\u0002\u007f\u0083\u0005\u001a\u000e\u0002\u0080\u0083\u00056\u001c",
    "\u0002\u0081\u0083\u0005R*\u0002\u0082{\u0003\u0002\u0002\u0002\u0082",
    "|\u0003\u0002\u0002\u0002\u0082}\u0003\u0002\u0002\u0002\u0082~\u0003",
    "\u0002\u0002\u0002\u0082\u007f\u0003\u0002\u0002\u0002\u0082\u0080\u0003",
    "\u0002\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\t\u0003",
    "\u0002\u0002\u0002\u0084\u0086\u0007\\\u0002\u0002\u0085\u0087\u0007",
    "[\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087\u0088\u0003",
    "\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088\u0089\u0003",
    "\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008c\u0007",
    "V\u0002\u0002\u008b\u008d\u0007[\u0002\u0002\u008c\u008b\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002",
    "\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0007\u001b\u0002\u0002\u0091\u000b\u0003\u0002",
    "\u0002\u0002\u0092\u0097\u0005\u000e\b\u0002\u0093\u0097\u0005\u0010",
    "\t\u0002\u0094\u0097\u0005\u0012\n\u0002\u0095\u0097\u0005\u0014\u000b",
    "\u0002\u0096\u0092\u0003\u0002\u0002\u0002\u0096\u0093\u0003\u0002\u0002",
    "\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096\u0095\u0003\u0002\u0002",
    "\u0002\u0097\r\u0003\u0002\u0002\u0002\u0098\u009a\u00079\u0002\u0002",
    "\u0099\u009b\u0007[\u0002\u0002\u009a\u0099\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002",
    "\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002",
    "\u009e\u00a0\u0007\\\u0002\u0002\u009f\u00a1\u0007[\u0002\u0002\u00a0",
    "\u009f\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2",
    "\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a6\u0007V\u0002\u0002\u00a5",
    "\u00a7\u0007[\u0002\u0002\u00a6\u00a5\u0003\u0002\u0002\u0002\u00a7",
    "\u00a8\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a8",
    "\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa",
    "\u00ab\u0005*\u0016\u0002\u00ab\u000f\u0003\u0002\u0002\u0002\u00ac",
    "\u00ae\u00079\u0002\u0002\u00ad\u00af\u0007[\u0002\u0002\u00ae\u00ad",
    "\u0003\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00ae",
    "\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2",
    "\u0003\u0002\u0002\u0002\u00b2\u00b4\u0007\\\u0002\u0002\u00b3\u00b5",
    "\u0007[\u0002\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6",
    "\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00ba",
    "\u0007V\u0002\u0002\u00b9\u00bb\u0007[\u0002\u0002\u00ba\u00b9\u0003",
    "\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\u0005,\u0017\u0002\u00bf\u0011\u0003",
    "\u0002\u0002\u0002\u00c0\u00c2\u00079\u0002\u0002\u00c1\u00c3\u0007",
    "[\u0002\u0002\u00c2\u00c1\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003",
    "\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003",
    "\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c8\u0007",
    "\\\u0002\u0002\u00c7\u00c9\u0007[\u0002\u0002\u00c8\u00c7\u0003\u0002",
    "\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002",
    "\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002",
    "\u0002\u0002\u00cc\u00ce\u0007V\u0002\u0002\u00cd\u00cf\u0007[\u0002",
    "\u0002\u00ce\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002",
    "\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002",
    "\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d3\u0005.\u0018",
    "\u0002\u00d3\u0013\u0003\u0002\u0002\u0002\u00d4\u00d6\u00079\u0002",
    "\u0002\u00d5\u00d7\u0007[\u0002\u0002\u00d6\u00d5\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002",
    "\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002",
    "\u0002\u00da\u00dc\u0007\\\u0002\u0002\u00db\u00dd\u0007[\u0002\u0002",
    "\u00dc\u00db\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002\u0002",
    "\u00de\u00dc\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e2\u0007V\u0002\u0002",
    "\u00e1\u00e3\u0007[\u0002\u0002\u00e2\u00e1\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002",
    "\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002",
    "\u00e6\u00e7\u00050\u0019\u0002\u00e7\u0015\u0003\u0002\u0002\u0002",
    "\u00e8\u00e9\u0005\u0018\r\u0002\u00e9\u00ea\u0005\u001a\u000e\u0002",
    "\u00ea\u00eb\u0007=\u0002\u0002\u00eb\u0017\u0003\u0002\u0002\u0002",
    "\u00ec\u00ee\u0007@\u0002\u0002\u00ed\u00ef\u0007[\u0002\u0002\u00ee",
    "\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0",
    "\u00ee\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1",
    "\u00f2\u0003\u0002\u0002\u0002\u00f2\u00f6\u0007\u0003\u0002\u0002\u00f3",
    "\u00f5\u0007[\u0002\u0002\u00f4\u00f3\u0003\u0002\u0002\u0002\u00f5",
    "\u00f8\u0003\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f6",
    "\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f9\u0003\u0002\u0002\u0002\u00f8",
    "\u00f6\u0003\u0002\u0002\u0002\u00f9\u00fd\u0007H\u0002\u0002\u00fa",
    "\u00fc\u0007[\u0002\u0002\u00fb\u00fa\u0003\u0002\u0002\u0002\u00fc",
    "\u00ff\u0003\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fd",
    "\u00fe\u0003\u0002\u0002\u0002\u00fe\u0100\u0003\u0002\u0002\u0002\u00ff",
    "\u00fd\u0003\u0002\u0002\u0002\u0100\u0101\u0007\u0004\u0002\u0002\u0101",
    "\u0105\u0007H\u0002\u0002\u0102\u0104\u0007[\u0002\u0002\u0103\u0102",
    "\u0003\u0002\u0002\u0002\u0104\u0107\u0003\u0002\u0002\u0002\u0105\u0103",
    "\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u0108",
    "\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0108\u010a",
    "\u0007\u0005\u0002\u0002\u0109\u010b\u0007Z\u0002\u0002\u010a\u0109",
    "\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u010a",
    "\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u0019",
    "\u0003\u0002\u0002\u0002\u010e\u0110\u0005\u001c\u000f\u0002\u010f\u0111",
    "\u0007Z\u0002\u0002\u0110\u010f\u0003\u0002\u0002\u0002\u0111\u0112",
    "\u0003\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0003\u0002\u0002\u0002\u0113\u0115\u0003\u0002\u0002\u0002\u0114\u010e",
    "\u0003\u0002\u0002\u0002\u0115\u0118\u0003\u0002\u0002\u0002\u0116\u0114",
    "\u0003\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002\u0117\u001b",
    "\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002\u0002\u0002\u0119\u0122",
    "\u00052\u001a\u0002\u011a\u0122\u0005\u001e\u0010\u0002\u011b\u0122",
    "\u0005> \u0002\u011c\u0122\u0005D#\u0002\u011d\u0122\u0005N(\u0002\u011e",
    "\u0122\u0005P)\u0002\u011f\u0122\u00056\u001c\u0002\u0120\u0122\u0005",
    "R*\u0002\u0121\u0119\u0003\u0002\u0002\u0002\u0121\u011a\u0003\u0002",
    "\u0002\u0002\u0121\u011b\u0003\u0002\u0002\u0002\u0121\u011c\u0003\u0002",
    "\u0002\u0002\u0121\u011d\u0003\u0002\u0002\u0002\u0121\u011e\u0003\u0002",
    "\u0002\u0002\u0121\u011f\u0003\u0002\u0002\u0002\u0121\u0120\u0003\u0002",
    "\u0002\u0002\u0122\u001d\u0003\u0002\u0002\u0002\u0123\u0124\u0005 ",
    "\u0011\u0002\u0124\u001f\u0003\u0002\u0002\u0002\u0125\u0127\u0007\u001e",
    "\u0002\u0002\u0126\u0128\u0007\u0011\u0002\u0002\u0127\u0126\u0003\u0002",
    "\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002\u0128\u012a\u0003\u0002",
    "\u0002\u0002\u0129\u012b\u0005\"\u0012\u0002\u012a\u0129\u0003\u0002",
    "\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u012d\u0003\u0002",
    "\u0002\u0002\u012c\u012e\u0005(\u0015\u0002\u012d\u012c\u0003\u0002",
    "\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e!\u0003\u0002",
    "\u0002\u0002\u012f\u0130\u0007X\u0002\u0002\u0130\u0134\u0007!\u0002",
    "\u0002\u0131\u0133\u0007\f\u0002\u0002\u0132\u0131\u0003\u0002\u0002",
    "\u0002\u0133\u0136\u0003\u0002\u0002\u0002\u0134\u0132\u0003\u0002\u0002",
    "\u0002\u0134\u0135\u0003\u0002\u0002\u0002\u0135\u013a\u0003\u0002\u0002",
    "\u0002\u0136\u0134\u0003\u0002\u0002\u0002\u0137\u0139\u0005$\u0013",
    "\u0002\u0138\u0137\u0003\u0002\u0002\u0002\u0139\u013c\u0003\u0002\u0002",
    "\u0002\u013a\u0138\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002",
    "\u0002\u013b\u013d\u0003\u0002\u0002\u0002\u013c\u013a\u0003\u0002\u0002",
    "\u0002\u013d\u013e\u0007Y\u0002\u0002\u013e#\u0003\u0002\u0002\u0002",
    "\u013f\u0140\u0007H\u0002\u0002\u0140\u0141\u0007#\u0002\u0002\u0141",
    "\u0142\u0007X\u0002\u0002\u0142\u0144\u0007\"\u0002\u0002\u0143\u0145",
    "\u0007\u0012\u0002\u0002\u0144\u0143\u0003\u0002\u0002\u0002\u0144\u0145",
    "\u0003\u0002\u0002\u0002\u0145\u0147\u0003\u0002\u0002\u0002\u0146\u0148",
    "\u0007\u0013\u0002\u0002\u0147\u0146\u0003\u0002\u0002\u0002\u0147\u0148",
    "\u0003\u0002\u0002\u0002\u0148\u014c\u0003\u0002\u0002\u0002\u0149\u014b",
    "\u0005&\u0014\u0002\u014a\u0149\u0003\u0002\u0002\u0002\u014b\u014e",
    "\u0003\u0002\u0002\u0002\u014c\u014a\u0003\u0002\u0002\u0002\u014c\u014d",
    "\u0003\u0002\u0002\u0002\u014d\u0150\u0003\u0002\u0002\u0002\u014e\u014c",
    "\u0003\u0002\u0002\u0002\u014f\u0151\u0007\u0017\u0002\u0002\u0150\u014f",
    "\u0003\u0002\u0002\u0002\u0150\u0151\u0003\u0002\u0002\u0002\u0151\u0152",
    "\u0003\u0002\u0002\u0002\u0152\u0153\u0007Y\u0002\u0002\u0153%\u0003",
    "\u0002\u0002\u0002\u0154\u0155\u0007H\u0002\u0002\u0155\u0156\u0007",
    "\u0016\u0002\u0002\u0156\u0157\u0007X\u0002\u0002\u0157\u0158\u0007",
    "\u0014\u0002\u0002\u0158\u0159\u0007\u0015\u0002\u0002\u0159\u015a\u0007",
    "Y\u0002\u0002\u015a\'\u0003\u0002\u0002\u0002\u015b\u015c\u0007X\u0002",
    "\u0002\u015c\u0160\u0007\r\u0002\u0002\u015d\u015f\u0007\f\u0002\u0002",
    "\u015e\u015d\u0003\u0002\u0002\u0002\u015f\u0162\u0003\u0002\u0002\u0002",
    "\u0160\u015e\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002",
    "\u0161\u0164\u0003\u0002\u0002\u0002\u0162\u0160\u0003\u0002\u0002\u0002",
    "\u0163\u0165\u0007\u0012\u0002\u0002\u0164\u0163\u0003\u0002\u0002\u0002",
    "\u0164\u0165\u0003\u0002\u0002\u0002\u0165\u0167\u0003\u0002\u0002\u0002",
    "\u0166\u0168\u0007\u0013\u0002\u0002\u0167\u0166\u0003\u0002\u0002\u0002",
    "\u0167\u0168\u0003\u0002\u0002\u0002\u0168\u016c\u0003\u0002\u0002\u0002",
    "\u0169\u016b\u0005&\u0014\u0002\u016a\u0169\u0003\u0002\u0002\u0002",
    "\u016b\u016e\u0003\u0002\u0002\u0002\u016c\u016a\u0003\u0002\u0002\u0002",
    "\u016c\u016d\u0003\u0002\u0002\u0002\u016d\u016f\u0003\u0002\u0002\u0002",
    "\u016e\u016c\u0003\u0002\u0002\u0002\u016f\u0170\u0007Y\u0002\u0002",
    "\u0170)\u0003\u0002\u0002\u0002\u0171\u0172\u0007\u001b\u0002\u0002",
    "\u0172\u0173\u0007X\u0002\u0002\u0173\u0174\u0007(\u0002\u0002\u0174",
    "\u0175\u0007Y\u0002\u0002\u0175+\u0003\u0002\u0002\u0002\u0176\u0177",
    "\u0007\u001c\u0002\u0002\u0177\u0178\u0007X\u0002\u0002\u0178\u017c",
    "\u0007\u000b\u0002\u0002\u0179\u017b\u0007\f\u0002\u0002\u017a\u0179",
    "\u0003\u0002\u0002\u0002\u017b\u017e\u0003\u0002\u0002\u0002\u017c\u017a",
    "\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u017f",
    "\u0003\u0002\u0002\u0002\u017e\u017c\u0003\u0002\u0002\u0002\u017f\u0180",
    "\u0007Y\u0002\u0002\u0180-\u0003\u0002\u0002\u0002\u0181\u0182\u0007",
    "\u001d\u0002\u0002\u0182\u0183\u0007X\u0002\u0002\u0183\u0184\u0007",
    "\'\u0002\u0002\u0184\u0185\u0007Y\u0002\u0002\u0185/\u0003\u0002\u0002",
    "\u0002\u0186\u0187\u0007\u001f\u0002\u0002\u0187\u0188\u0007X\u0002",
    "\u0002\u0188\u018c\u0007\u000b\u0002\u0002\u0189\u018b\u0007\f\u0002",
    "\u0002\u018a\u0189\u0003\u0002\u0002\u0002\u018b\u018e\u0003\u0002\u0002",
    "\u0002\u018c\u018a\u0003\u0002\u0002\u0002\u018c\u018d\u0003\u0002\u0002",
    "\u0002\u018d\u018f\u0003\u0002\u0002\u0002\u018e\u018c\u0003\u0002\u0002",
    "\u0002\u018f\u0190\u0007Y\u0002\u0002\u01901\u0003\u0002\u0002\u0002",
    "\u0191\u0192\u00054\u001b\u0002\u01923\u0003\u0002\u0002\u0002\u0193",
    "\u0195\u0007\\\u0002\u0002\u0194\u0196\u0007[\u0002\u0002\u0195\u0194",
    "\u0003\u0002\u0002\u0002\u0196\u0197\u0003\u0002\u0002\u0002\u0197\u0195",
    "\u0003\u0002\u0002\u0002\u0197\u0198\u0003\u0002\u0002\u0002\u0198\u0199",
    "\u0003\u0002\u0002\u0002\u0199\u019b\u0007+\u0002\u0002\u019a\u019c",
    "\u0007[\u0002\u0002\u019b\u019a\u0003\u0002\u0002\u0002\u019c\u019d",
    "\u0003\u0002\u0002\u0002\u019d\u019b\u0003\u0002\u0002\u0002\u019d\u019e",
    "\u0003\u0002\u0002\u0002\u019e\u019f\u0003\u0002\u0002\u0002\u019f\u01a1",
    "\u0007\\\u0002\u0002\u01a0\u01a2\u0007[\u0002\u0002\u01a1\u01a0\u0003",
    "\u0002\u0002\u0002\u01a2\u01a3\u0003\u0002\u0002\u0002\u01a3\u01a1\u0003",
    "\u0002\u0002\u0002\u01a3\u01a4\u0003\u0002\u0002\u0002\u01a4\u01a5\u0003",
    "\u0002\u0002\u0002\u01a5\u01a7\u0007V\u0002\u0002\u01a6\u01a8\u0007",
    "[\u0002\u0002\u01a7\u01a6\u0003\u0002\u0002\u0002\u01a8\u01a9\u0003",
    "\u0002\u0002\u0002\u01a9\u01a7\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003",
    "\u0002\u0002\u0002\u01aa\u01ab\u0003\u0002\u0002\u0002\u01ab\u01ac\u0007",
    "\'\u0002\u0002\u01ac5\u0003\u0002\u0002\u0002\u01ad\u01b0\u00058\u001d",
    "\u0002\u01ae\u01b0\u0005:\u001e\u0002\u01af\u01ad\u0003\u0002\u0002",
    "\u0002\u01af\u01ae\u0003\u0002\u0002\u0002\u01b07\u0003\u0002\u0002",
    "\u0002\u01b1\u01b3\u00075\u0002\u0002\u01b2\u01b4\u0007[\u0002\u0002",
    "\u01b3\u01b2\u0003\u0002\u0002\u0002\u01b4\u01b5\u0003\u0002\u0002\u0002",
    "\u01b5\u01b3\u0003\u0002\u0002\u0002\u01b5\u01b6\u0003\u0002\u0002\u0002",
    "\u01b6\u01b7\u0003\u0002\u0002\u0002\u01b7\u01b9\u0007\t\u0002\u0002",
    "\u01b8\u01ba\u0007[\u0002\u0002\u01b9\u01b8\u0003\u0002\u0002\u0002",
    "\u01ba\u01bb\u0003\u0002\u0002\u0002\u01bb\u01b9\u0003\u0002\u0002\u0002",
    "\u01bb\u01bc\u0003\u0002\u0002\u0002\u01bc\u01bd\u0003\u0002\u0002\u0002",
    "\u01bd\u01c1\u0007\\\u0002\u0002\u01be\u01c0\u0007[\u0002\u0002\u01bf",
    "\u01be\u0003\u0002\u0002\u0002\u01c0\u01c3\u0003\u0002\u0002\u0002\u01c1",
    "\u01bf\u0003\u0002\u0002\u0002\u01c1\u01c2\u0003\u0002\u0002\u0002\u01c2",
    "\u01c4\u0003\u0002\u0002\u0002\u01c3\u01c1\u0003\u0002\u0002\u0002\u01c4",
    "\u01c8\u0007K\u0002\u0002\u01c5\u01c7\u0007[\u0002\u0002\u01c6\u01c5",
    "\u0003\u0002\u0002\u0002\u01c7\u01ca\u0003\u0002\u0002\u0002\u01c8\u01c6",
    "\u0003\u0002\u0002\u0002\u01c8\u01c9\u0003\u0002\u0002\u0002\u01c9\u01cb",
    "\u0003\u0002\u0002\u0002\u01ca\u01c8\u0003\u0002\u0002\u0002\u01cb\u01cc",
    "\u0007\'\u0002\u0002\u01cc9\u0003\u0002\u0002\u0002\u01cd\u01d1\u0007",
    "]\u0002\u0002\u01ce\u01d0\u0007[\u0002\u0002\u01cf\u01ce\u0003\u0002",
    "\u0002\u0002\u01d0\u01d3\u0003\u0002\u0002\u0002\u01d1\u01cf\u0003\u0002",
    "\u0002\u0002\u01d1\u01d2\u0003\u0002\u0002\u0002\u01d2\u01d4\u0003\u0002",
    "\u0002\u0002\u01d3\u01d1\u0003\u0002\u0002\u0002\u01d4\u01d5\u0007\'",
    "\u0002\u0002\u01d5;\u0003\u0002\u0002\u0002\u01d6\u01d8\u00076\u0002",
    "\u0002\u01d7\u01d9\u0007[\u0002\u0002\u01d8\u01d7\u0003\u0002\u0002",
    "\u0002\u01d9\u01da\u0003\u0002\u0002\u0002\u01da\u01d8\u0003\u0002\u0002",
    "\u0002\u01da\u01db\u0003\u0002\u0002\u0002\u01db\u01dc\u0003\u0002\u0002",
    "\u0002\u01dc\u01de\u0007\t\u0002\u0002\u01dd\u01df\u0007[\u0002\u0002",
    "\u01de\u01dd\u0003\u0002\u0002\u0002\u01df\u01e0\u0003\u0002\u0002\u0002",
    "\u01e0\u01de\u0003\u0002\u0002\u0002\u01e0\u01e1\u0003\u0002\u0002\u0002",
    "\u01e1\u01e2\u0003\u0002\u0002\u0002\u01e2\u01e6\u0007\\\u0002\u0002",
    "\u01e3\u01e5\u0007[\u0002\u0002\u01e4\u01e3\u0003\u0002\u0002\u0002",
    "\u01e5\u01e8\u0003\u0002\u0002\u0002\u01e6\u01e4\u0003\u0002\u0002\u0002",
    "\u01e6\u01e7\u0003\u0002\u0002\u0002\u01e7\u01e9\u0003\u0002\u0002\u0002",
    "\u01e8\u01e6\u0003\u0002\u0002\u0002\u01e9\u01ed\u0007K\u0002\u0002",
    "\u01ea\u01ec\u0007[\u0002\u0002\u01eb\u01ea\u0003\u0002\u0002\u0002",
    "\u01ec\u01ef\u0003\u0002\u0002\u0002\u01ed\u01eb\u0003\u0002\u0002\u0002",
    "\u01ed\u01ee\u0003\u0002\u0002\u0002\u01ee\u01f0\u0003\u0002\u0002\u0002",
    "\u01ef\u01ed\u0003\u0002\u0002\u0002\u01f0\u01f1\u0007\'\u0002\u0002",
    "\u01f1=\u0003\u0002\u0002\u0002\u01f2\u01f4\u0007:\u0002\u0002\u01f3",
    "\u01f5\u0007Z\u0002\u0002\u01f4\u01f3\u0003\u0002\u0002\u0002\u01f4",
    "\u01f5\u0003\u0002\u0002\u0002\u01f5\u01f6\u0003\u0002\u0002\u0002\u01f6",
    "\u01f7\u0007Z\u0002\u0002\u01f7\u01f8\u0005@!\u0002\u01f8\u01f9\u0007",
    "=\u0002\u0002\u01f9?\u0003\u0002\u0002\u0002\u01fa\u01fb\u0005\u001a",
    "\u000e\u0002\u01fb\u01fd\u0007Z\u0002\u0002\u01fc\u01fe\u0005B\"\u0002",
    "\u01fd\u01fc\u0003\u0002\u0002\u0002\u01fd\u01fe\u0003\u0002\u0002\u0002",
    "\u01feA\u0003\u0002\u0002\u0002\u01ff\u0200\u0007>\u0002\u0002\u0200",
    "\u0201\u0007Z\u0002\u0002\u0201\u0203\u0005\u001a\u000e\u0002\u0202",
    "\u01ff\u0003\u0002\u0002\u0002\u0203\u0204\u0003\u0002\u0002\u0002\u0204",
    "\u0202\u0003\u0002\u0002\u0002\u0204\u0205\u0003\u0002\u0002\u0002\u0205",
    "C\u0003\u0002\u0002\u0002\u0206\u0207\u0007;\u0002\u0002\u0207\u0208",
    "\u0007[\u0002\u0002\u0208\u0209\u0007A\u0002\u0002\u0209\u020a\u0007",
    "[\u0002\u0002\u020a\u020b\u0005F$\u0002\u020b\u020d\u0007Z\u0002\u0002",
    "\u020c\u020e\u0007Z\u0002\u0002\u020d\u020c\u0003\u0002\u0002\u0002",
    "\u020d\u020e\u0003\u0002\u0002\u0002\u020e\u020f\u0003\u0002\u0002\u0002",
    "\u020f\u0210\u0005J&\u0002\u0210\u0211\u0007=\u0002\u0002\u0211E\u0003",
    "\u0002\u0002\u0002\u0212\u0213\u0005H%\u0002\u0213G\u0003\u0002\u0002",
    "\u0002\u0214\u0215\u0007\u0019\u0002\u0002\u0215\u0216\u0007X\u0002",
    "\u0002\u0216\u021a\u0007\n\u0002\u0002\u0217\u0219\u0007\f\u0002\u0002",
    "\u0218\u0217\u0003\u0002\u0002\u0002\u0219\u021c\u0003\u0002\u0002\u0002",
    "\u021a\u0218\u0003\u0002\u0002\u0002\u021a\u021b\u0003\u0002\u0002\u0002",
    "\u021b\u021d\u0003\u0002\u0002\u0002\u021c\u021a\u0003\u0002\u0002\u0002",
    "\u021d\u021e\u0007Y\u0002\u0002\u021eI\u0003\u0002\u0002\u0002\u021f",
    "\u0220\u0005\u001a\u000e\u0002\u0220\u0222\u0007Z\u0002\u0002\u0221",
    "\u0223\u0005L\'\u0002\u0222\u0221\u0003\u0002\u0002\u0002\u0222\u0223",
    "\u0003\u0002\u0002\u0002\u0223K\u0003\u0002\u0002\u0002\u0224\u0225",
    "\u0007>\u0002\u0002\u0225\u0226\u0007Z\u0002\u0002\u0226\u0228\u0005",
    "\u001a\u000e\u0002\u0227\u0224\u0003\u0002\u0002\u0002\u0228\u0229\u0003",
    "\u0002\u0002\u0002\u0229\u0227\u0003\u0002\u0002\u0002\u0229\u022a\u0003",
    "\u0002\u0002\u0002\u022aM\u0003\u0002\u0002\u0002\u022b\u022c\u0007",
    "?\u0002\u0002\u022c\u022d\u0007[\u0002\u0002\u022d\u022e\u0005T+\u0002",
    "\u022e\u0230\u0007Z\u0002\u0002\u022f\u0231\u0007Z\u0002\u0002\u0230",
    "\u022f\u0003\u0002\u0002\u0002\u0230\u0231\u0003\u0002\u0002\u0002\u0231",
    "\u0232\u0003\u0002\u0002\u0002\u0232\u0233\u0005\u001a\u000e\u0002\u0233",
    "\u0234\u0007=\u0002\u0002\u0234O\u0003\u0002\u0002\u0002\u0235\u0236",
    "\u0007<\u0002\u0002\u0236\u0237\u0007[\u0002\u0002\u0237\u0239\u0007",
    "\\\u0002\u0002\u0238\u023a\u0007Z\u0002\u0002\u0239\u0238\u0003\u0002",
    "\u0002\u0002\u0239\u023a\u0003\u0002\u0002\u0002\u023aQ\u0003\u0002",
    "\u0002\u0002\u023b\u023c\t\u0002\u0002\u0002\u023cS\u0003\u0002\u0002",
    "\u0002\u023d\u023e\u0007\u0018\u0002\u0002\u023eU\u0003\u0002\u0002",
    "\u0002GXZcektx\u0082\u0088\u008e\u0096\u009c\u00a2\u00a8\u00b0\u00b6",
    "\u00bc\u00c4\u00ca\u00d0\u00d8\u00de\u00e4\u00f0\u00f6\u00fd\u0105\u010c",
    "\u0112\u0116\u0121\u0127\u012a\u012d\u0134\u013a\u0144\u0147\u014c\u0150",
    "\u0160\u0164\u0167\u016c\u017c\u018c\u0197\u019d\u01a3\u01a9\u01af\u01b5",
    "\u01bb\u01c1\u01c8\u01d1\u01da\u01e0\u01e6\u01ed\u01f4\u01fd\u0204\u020d",
    "\u021a\u0222\u0229\u0230\u0239"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, "'&'", "'&&'", "'^'", "','", 
                     "'--'", null, "'='", null, "'>'", null, "'<'", null, 
                     null, "'+'", "'*'", "'/'", null, "':'", "'''", "'('", 
                     "')'", null, "' '" ];

var symbolicNames = [ null, "GROUP_NAME_DEF", "GROUP_PATH_DEF", "GROUP_METHOD_DEF", 
                      "COMMENTST", "HASHCOMMENTST", "DOUBLESLASHCOMMENTST", 
                      "TYPEDEFINITIONX", "SOURCEDEF", "PROTOCOLDEF", "PARAMX", 
                      "NAMEDEF", "CONTEXTDEF", "HOSTDEF", "CONFIGSDEF", 
                      "ARGUMENTLISTDEF", "VALUEDEF", "XPATHDEF", "PREFIXDEF", 
                      "URIDEF", "NAMESPACEDEF", "JSONPATHDEF", "EXPRESSIONX", 
                      "CONDITIONX", "TIMEOUTDEF", "INTEGRATIONFLOWX", "INBOUNDENDPOINTX", 
                      "PIPELINEX", "MEDIATORDEFINITIONX", "OUTBOUNDENDPOINTX", 
                      "PROCESS_MESSAGEX", "LEVELDEF", "KEYDEF", "PROPERTYDEF", 
                      "LOGDEF", "ASX", "COMMENTX", "COMMENTSTRINGX", "STRINGX", 
                      "URLSTRINGX", "URLTEMPLATEX", "ARROWX", "STRINGTYPEX", 
                      "INTEGERTYPEX", "BOOLEANTYPEX", "DOUBLETYPEX", "FLOATTYPEX", 
                      "LONGTYPEX", "SHORTTYPEX", "XMLTYPEX", "JSONTYPEX", 
                      "VARX", "CONSTX", "STARTUMLX", "ENDUMLX", "PARTICIPANT", 
                      "PAR", "IF", "REF", "END", "ELSE", "LOOP", "GROUP", 
                      "WITH", "NAME", "PATH", "METHOD", "AMP_SYMBOL", "AMPAMP_SYMBOL", 
                      "CARET_SYMBOL", "COMMA_SYMBOL", "COMMENT_SYMBOL", 
                      "CONTINUATION_SYMBOL", "EQ_SYMBOL", "GE_SYMBOL", "GT_SYMBOL", 
                      "LE_SYMBOL", "LT_SYMBOL", "MINUS_SYMBOL", "NE_SYMBOL", 
                      "PLUS_SYMBOL", "STAR_SYMBOL", "SLASH_SYMBOL", "UNDERSCORE", 
                      "COLON", "SINGLEQUOTES", "LPAREN", "RPAREN", "NEWLINE", 
                      "WS", "IDENTIFIER", "VAR_IDENTIFIER", "ANY_STRING", 
                      "NUMBER", "URL", "URLTEMPLATE", "CONTINUATION", "WHITESPACE" ];

var ruleNames =  [ "script", "handler", "statementList", "statement", "titleStatement", 
                   "participantStatement", "integrationFlowDefStatement", 
                   "inboundEndpointDefStatement", "pipelineDefStatement", 
                   "outboundEndpointDefStatement", "groupStatement", "groupDefStatement", 
                   "messageflowStatementList", "messageflowStatement", "mediatorStatement", 
                   "mediatorStatementDef", "logMediatorStatementDef", "logPropertyStatementDef", 
                   "nameSpaceStatementDef", "headerMediatorStatementDef", 
                   "integrationFlowDef", "inboundEndpointDef", "pipelineDef", 
                   "outboundEndpointDef", "routingStatement", "routingStatementDef", 
                   "variableStatement", "variableDeclarationStatement", 
                   "variableAssignmentStatement", "constStatement", "parallelStatement", 
                   "parMultiThenBlock", "parElseBlock", "ifStatement", "conditionStatement", 
                   "conditionDef", "ifMultiThenBlock", "ifElseBlock", "loopStatement", 
                   "refStatement", "commentStatement", "expression" ];

function NELParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

NELParser.prototype = Object.create(antlr4.Parser.prototype);
NELParser.prototype.constructor = NELParser;

Object.defineProperty(NELParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

NELParser.EOF = antlr4.Token.EOF;
NELParser.GROUP_NAME_DEF = 1;
NELParser.GROUP_PATH_DEF = 2;
NELParser.GROUP_METHOD_DEF = 3;
NELParser.COMMENTST = 4;
NELParser.HASHCOMMENTST = 5;
NELParser.DOUBLESLASHCOMMENTST = 6;
NELParser.TYPEDEFINITIONX = 7;
NELParser.SOURCEDEF = 8;
NELParser.PROTOCOLDEF = 9;
NELParser.PARAMX = 10;
NELParser.NAMEDEF = 11;
NELParser.CONTEXTDEF = 12;
NELParser.HOSTDEF = 13;
NELParser.CONFIGSDEF = 14;
NELParser.ARGUMENTLISTDEF = 15;
NELParser.VALUEDEF = 16;
NELParser.XPATHDEF = 17;
NELParser.PREFIXDEF = 18;
NELParser.URIDEF = 19;
NELParser.NAMESPACEDEF = 20;
NELParser.JSONPATHDEF = 21;
NELParser.EXPRESSIONX = 22;
NELParser.CONDITIONX = 23;
NELParser.TIMEOUTDEF = 24;
NELParser.INTEGRATIONFLOWX = 25;
NELParser.INBOUNDENDPOINTX = 26;
NELParser.PIPELINEX = 27;
NELParser.MEDIATORDEFINITIONX = 28;
NELParser.OUTBOUNDENDPOINTX = 29;
NELParser.PROCESS_MESSAGEX = 30;
NELParser.LEVELDEF = 31;
NELParser.KEYDEF = 32;
NELParser.PROPERTYDEF = 33;
NELParser.LOGDEF = 34;
NELParser.ASX = 35;
NELParser.COMMENTX = 36;
NELParser.COMMENTSTRINGX = 37;
NELParser.STRINGX = 38;
NELParser.URLSTRINGX = 39;
NELParser.URLTEMPLATEX = 40;
NELParser.ARROWX = 41;
NELParser.STRINGTYPEX = 42;
NELParser.INTEGERTYPEX = 43;
NELParser.BOOLEANTYPEX = 44;
NELParser.DOUBLETYPEX = 45;
NELParser.FLOATTYPEX = 46;
NELParser.LONGTYPEX = 47;
NELParser.SHORTTYPEX = 48;
NELParser.XMLTYPEX = 49;
NELParser.JSONTYPEX = 50;
NELParser.VARX = 51;
NELParser.CONSTX = 52;
NELParser.STARTUMLX = 53;
NELParser.ENDUMLX = 54;
NELParser.PARTICIPANT = 55;
NELParser.PAR = 56;
NELParser.IF = 57;
NELParser.REF = 58;
NELParser.END = 59;
NELParser.ELSE = 60;
NELParser.LOOP = 61;
NELParser.GROUP = 62;
NELParser.WITH = 63;
NELParser.NAME = 64;
NELParser.PATH = 65;
NELParser.METHOD = 66;
NELParser.AMP_SYMBOL = 67;
NELParser.AMPAMP_SYMBOL = 68;
NELParser.CARET_SYMBOL = 69;
NELParser.COMMA_SYMBOL = 70;
NELParser.COMMENT_SYMBOL = 71;
NELParser.CONTINUATION_SYMBOL = 72;
NELParser.EQ_SYMBOL = 73;
NELParser.GE_SYMBOL = 74;
NELParser.GT_SYMBOL = 75;
NELParser.LE_SYMBOL = 76;
NELParser.LT_SYMBOL = 77;
NELParser.MINUS_SYMBOL = 78;
NELParser.NE_SYMBOL = 79;
NELParser.PLUS_SYMBOL = 80;
NELParser.STAR_SYMBOL = 81;
NELParser.SLASH_SYMBOL = 82;
NELParser.UNDERSCORE = 83;
NELParser.COLON = 84;
NELParser.SINGLEQUOTES = 85;
NELParser.LPAREN = 86;
NELParser.RPAREN = 87;
NELParser.NEWLINE = 88;
NELParser.WS = 89;
NELParser.IDENTIFIER = 90;
NELParser.VAR_IDENTIFIER = 91;
NELParser.ANY_STRING = 92;
NELParser.NUMBER = 93;
NELParser.URL = 94;
NELParser.URLTEMPLATE = 95;
NELParser.CONTINUATION = 96;
NELParser.WHITESPACE = 97;

NELParser.RULE_script = 0;
NELParser.RULE_handler = 1;
NELParser.RULE_statementList = 2;
NELParser.RULE_statement = 3;
NELParser.RULE_titleStatement = 4;
NELParser.RULE_participantStatement = 5;
NELParser.RULE_integrationFlowDefStatement = 6;
NELParser.RULE_inboundEndpointDefStatement = 7;
NELParser.RULE_pipelineDefStatement = 8;
NELParser.RULE_outboundEndpointDefStatement = 9;
NELParser.RULE_groupStatement = 10;
NELParser.RULE_groupDefStatement = 11;
NELParser.RULE_messageflowStatementList = 12;
NELParser.RULE_messageflowStatement = 13;
NELParser.RULE_mediatorStatement = 14;
NELParser.RULE_mediatorStatementDef = 15;
NELParser.RULE_logMediatorStatementDef = 16;
NELParser.RULE_logPropertyStatementDef = 17;
NELParser.RULE_nameSpaceStatementDef = 18;
NELParser.RULE_headerMediatorStatementDef = 19;
NELParser.RULE_integrationFlowDef = 20;
NELParser.RULE_inboundEndpointDef = 21;
NELParser.RULE_pipelineDef = 22;
NELParser.RULE_outboundEndpointDef = 23;
NELParser.RULE_routingStatement = 24;
NELParser.RULE_routingStatementDef = 25;
NELParser.RULE_variableStatement = 26;
NELParser.RULE_variableDeclarationStatement = 27;
NELParser.RULE_variableAssignmentStatement = 28;
NELParser.RULE_constStatement = 29;
NELParser.RULE_parallelStatement = 30;
NELParser.RULE_parMultiThenBlock = 31;
NELParser.RULE_parElseBlock = 32;
NELParser.RULE_ifStatement = 33;
NELParser.RULE_conditionStatement = 34;
NELParser.RULE_conditionDef = 35;
NELParser.RULE_ifMultiThenBlock = 36;
NELParser.RULE_ifElseBlock = 37;
NELParser.RULE_loopStatement = 38;
NELParser.RULE_refStatement = 39;
NELParser.RULE_commentStatement = 40;
NELParser.RULE_expression = 41;

function ScriptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_script;
    return this;
}

ScriptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScriptContext.prototype.constructor = ScriptContext;

ScriptContext.prototype.EOF = function() {
    return this.getToken(NELParser.EOF, 0);
};

ScriptContext.prototype.handler = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HandlerContext);
    } else {
        return this.getTypedRuleContext(HandlerContext,i);
    }
};

ScriptContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.NEWLINE);
    } else {
        return this.getToken(NELParser.NEWLINE, i);
    }
};


ScriptContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterScript(this);
	}
};

ScriptContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitScript(this);
	}
};




NELParser.ScriptContext = ScriptContext;

NELParser.prototype.script = function() {

    var localctx = new ScriptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, NELParser.RULE_script);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NELParser.COMMENTST) | (1 << NELParser.HASHCOMMENTST) | (1 << NELParser.DOUBLESLASHCOMMENTST))) !== 0) || _la===NELParser.STARTUMLX || _la===NELParser.NEWLINE) {
            this.state = 86;
            switch(this._input.LA(1)) {
            case NELParser.COMMENTST:
            case NELParser.HASHCOMMENTST:
            case NELParser.DOUBLESLASHCOMMENTST:
            case NELParser.STARTUMLX:
                this.state = 84;
                this.handler();
                break;
            case NELParser.NEWLINE:
                this.state = 85;
                this.match(NELParser.NEWLINE);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 91;
        this.match(NELParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HandlerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_handler;
    return this;
}

HandlerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HandlerContext.prototype.constructor = HandlerContext;

HandlerContext.prototype.STARTUMLX = function() {
    return this.getToken(NELParser.STARTUMLX, 0);
};

HandlerContext.prototype.statementList = function() {
    return this.getTypedRuleContext(StatementListContext,0);
};

HandlerContext.prototype.ENDUMLX = function() {
    return this.getToken(NELParser.ENDUMLX, 0);
};

HandlerContext.prototype.commentStatement = function() {
    return this.getTypedRuleContext(CommentStatementContext,0);
};

HandlerContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.NEWLINE);
    } else {
        return this.getToken(NELParser.NEWLINE, i);
    }
};


HandlerContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterHandler(this);
	}
};

HandlerContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitHandler(this);
	}
};




NELParser.HandlerContext = HandlerContext;

NELParser.prototype.handler = function() {

    var localctx = new HandlerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, NELParser.RULE_handler);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NELParser.COMMENTST) | (1 << NELParser.HASHCOMMENTST) | (1 << NELParser.DOUBLESLASHCOMMENTST))) !== 0)) {
            this.state = 93;
            this.commentStatement();
            this.state = 95; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 94;
                this.match(NELParser.NEWLINE);
                this.state = 97; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===NELParser.NEWLINE);
        }

        this.state = 101;
        this.match(NELParser.STARTUMLX);
        this.state = 103; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 102;
        		this.match(NELParser.NEWLINE);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 105; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 107;
        this.statementList();
        this.state = 108;
        this.match(NELParser.ENDUMLX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_statementList;
    return this;
}

StatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementListContext.prototype.constructor = StatementListContext;

StatementListContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementListContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.NEWLINE);
    } else {
        return this.getToken(NELParser.NEWLINE, i);
    }
};


StatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterStatementList(this);
	}
};

StatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitStatementList(this);
	}
};




NELParser.StatementListContext = StatementListContext;

NELParser.prototype.statementList = function() {

    var localctx = new StatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, NELParser.RULE_statementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NELParser.COMMENTST) | (1 << NELParser.HASHCOMMENTST) | (1 << NELParser.DOUBLESLASHCOMMENTST) | (1 << NELParser.MEDIATORDEFINITIONX))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (NELParser.VARX - 51)) | (1 << (NELParser.CONSTX - 51)) | (1 << (NELParser.PARTICIPANT - 51)) | (1 << (NELParser.PAR - 51)) | (1 << (NELParser.IF - 51)) | (1 << (NELParser.REF - 51)) | (1 << (NELParser.LOOP - 51)) | (1 << (NELParser.GROUP - 51)))) !== 0) || ((((_la - 88)) & ~0x1f) == 0 && ((1 << (_la - 88)) & ((1 << (NELParser.NEWLINE - 88)) | (1 << (NELParser.IDENTIFIER - 88)) | (1 << (NELParser.VAR_IDENTIFIER - 88)))) !== 0)) {
            this.state = 110;
            this.statement();
            this.state = 112; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 111;
            		this.match(NELParser.NEWLINE);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 114; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.titleStatement = function() {
    return this.getTypedRuleContext(TitleStatementContext,0);
};

StatementContext.prototype.participantStatement = function() {
    return this.getTypedRuleContext(ParticipantStatementContext,0);
};

StatementContext.prototype.constStatement = function() {
    return this.getTypedRuleContext(ConstStatementContext,0);
};

StatementContext.prototype.groupStatement = function() {
    return this.getTypedRuleContext(GroupStatementContext,0);
};

StatementContext.prototype.messageflowStatementList = function() {
    return this.getTypedRuleContext(MessageflowStatementListContext,0);
};

StatementContext.prototype.variableStatement = function() {
    return this.getTypedRuleContext(VariableStatementContext,0);
};

StatementContext.prototype.commentStatement = function() {
    return this.getTypedRuleContext(CommentStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitStatement(this);
	}
};




NELParser.StatementContext = StatementContext;

NELParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, NELParser.RULE_statement);
    try {
        this.state = 128;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.titleStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this.participantStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 123;
            this.constStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 124;
            this.groupStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 125;
            this.messageflowStatementList();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 126;
            this.variableStatement();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 127;
            this.commentStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TitleStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_titleStatement;
    return this;
}

TitleStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleStatementContext.prototype.constructor = TitleStatementContext;

TitleStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(NELParser.IDENTIFIER, 0);
};

TitleStatementContext.prototype.COLON = function() {
    return this.getToken(NELParser.COLON, 0);
};

TitleStatementContext.prototype.INTEGRATIONFLOWX = function() {
    return this.getToken(NELParser.INTEGRATIONFLOWX, 0);
};

TitleStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


TitleStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterTitleStatement(this);
	}
};

TitleStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitTitleStatement(this);
	}
};




NELParser.TitleStatementContext = TitleStatementContext;

NELParser.prototype.titleStatement = function() {

    var localctx = new TitleStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, NELParser.RULE_titleStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(NELParser.IDENTIFIER);
        this.state = 132; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 131;
            this.match(NELParser.WS);
            this.state = 134; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 136;
        this.match(NELParser.COLON);
        this.state = 138; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 137;
            this.match(NELParser.WS);
            this.state = 140; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 142;
        this.match(NELParser.INTEGRATIONFLOWX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParticipantStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_participantStatement;
    return this;
}

ParticipantStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParticipantStatementContext.prototype.constructor = ParticipantStatementContext;

ParticipantStatementContext.prototype.integrationFlowDefStatement = function() {
    return this.getTypedRuleContext(IntegrationFlowDefStatementContext,0);
};

ParticipantStatementContext.prototype.inboundEndpointDefStatement = function() {
    return this.getTypedRuleContext(InboundEndpointDefStatementContext,0);
};

ParticipantStatementContext.prototype.pipelineDefStatement = function() {
    return this.getTypedRuleContext(PipelineDefStatementContext,0);
};

ParticipantStatementContext.prototype.outboundEndpointDefStatement = function() {
    return this.getTypedRuleContext(OutboundEndpointDefStatementContext,0);
};

ParticipantStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterParticipantStatement(this);
	}
};

ParticipantStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitParticipantStatement(this);
	}
};




NELParser.ParticipantStatementContext = ParticipantStatementContext;

NELParser.prototype.participantStatement = function() {

    var localctx = new ParticipantStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, NELParser.RULE_participantStatement);
    try {
        this.state = 148;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.integrationFlowDefStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 145;
            this.inboundEndpointDefStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 146;
            this.pipelineDefStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 147;
            this.outboundEndpointDefStatement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntegrationFlowDefStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_integrationFlowDefStatement;
    return this;
}

IntegrationFlowDefStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntegrationFlowDefStatementContext.prototype.constructor = IntegrationFlowDefStatementContext;

IntegrationFlowDefStatementContext.prototype.PARTICIPANT = function() {
    return this.getToken(NELParser.PARTICIPANT, 0);
};

IntegrationFlowDefStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(NELParser.IDENTIFIER, 0);
};

IntegrationFlowDefStatementContext.prototype.COLON = function() {
    return this.getToken(NELParser.COLON, 0);
};

IntegrationFlowDefStatementContext.prototype.integrationFlowDef = function() {
    return this.getTypedRuleContext(IntegrationFlowDefContext,0);
};

IntegrationFlowDefStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


IntegrationFlowDefStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterIntegrationFlowDefStatement(this);
	}
};

IntegrationFlowDefStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitIntegrationFlowDefStatement(this);
	}
};




NELParser.IntegrationFlowDefStatementContext = IntegrationFlowDefStatementContext;

NELParser.prototype.integrationFlowDefStatement = function() {

    var localctx = new IntegrationFlowDefStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, NELParser.RULE_integrationFlowDefStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.match(NELParser.PARTICIPANT);
        this.state = 152; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 151;
            this.match(NELParser.WS);
            this.state = 154; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 156;
        this.match(NELParser.IDENTIFIER);
        this.state = 158; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 157;
            this.match(NELParser.WS);
            this.state = 160; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 162;
        this.match(NELParser.COLON);
        this.state = 164; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 163;
            this.match(NELParser.WS);
            this.state = 166; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 168;
        this.integrationFlowDef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InboundEndpointDefStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_inboundEndpointDefStatement;
    return this;
}

InboundEndpointDefStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InboundEndpointDefStatementContext.prototype.constructor = InboundEndpointDefStatementContext;

InboundEndpointDefStatementContext.prototype.PARTICIPANT = function() {
    return this.getToken(NELParser.PARTICIPANT, 0);
};

InboundEndpointDefStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(NELParser.IDENTIFIER, 0);
};

InboundEndpointDefStatementContext.prototype.COLON = function() {
    return this.getToken(NELParser.COLON, 0);
};

InboundEndpointDefStatementContext.prototype.inboundEndpointDef = function() {
    return this.getTypedRuleContext(InboundEndpointDefContext,0);
};

InboundEndpointDefStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


InboundEndpointDefStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterInboundEndpointDefStatement(this);
	}
};

InboundEndpointDefStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitInboundEndpointDefStatement(this);
	}
};




NELParser.InboundEndpointDefStatementContext = InboundEndpointDefStatementContext;

NELParser.prototype.inboundEndpointDefStatement = function() {

    var localctx = new InboundEndpointDefStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, NELParser.RULE_inboundEndpointDefStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(NELParser.PARTICIPANT);
        this.state = 172; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 171;
            this.match(NELParser.WS);
            this.state = 174; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 176;
        this.match(NELParser.IDENTIFIER);
        this.state = 178; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 177;
            this.match(NELParser.WS);
            this.state = 180; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 182;
        this.match(NELParser.COLON);
        this.state = 184; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 183;
            this.match(NELParser.WS);
            this.state = 186; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 188;
        this.inboundEndpointDef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PipelineDefStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_pipelineDefStatement;
    return this;
}

PipelineDefStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineDefStatementContext.prototype.constructor = PipelineDefStatementContext;

PipelineDefStatementContext.prototype.PARTICIPANT = function() {
    return this.getToken(NELParser.PARTICIPANT, 0);
};

PipelineDefStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(NELParser.IDENTIFIER, 0);
};

PipelineDefStatementContext.prototype.COLON = function() {
    return this.getToken(NELParser.COLON, 0);
};

PipelineDefStatementContext.prototype.pipelineDef = function() {
    return this.getTypedRuleContext(PipelineDefContext,0);
};

PipelineDefStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


PipelineDefStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterPipelineDefStatement(this);
	}
};

PipelineDefStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitPipelineDefStatement(this);
	}
};




NELParser.PipelineDefStatementContext = PipelineDefStatementContext;

NELParser.prototype.pipelineDefStatement = function() {

    var localctx = new PipelineDefStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, NELParser.RULE_pipelineDefStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(NELParser.PARTICIPANT);
        this.state = 192; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 191;
            this.match(NELParser.WS);
            this.state = 194; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 196;
        this.match(NELParser.IDENTIFIER);
        this.state = 198; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 197;
            this.match(NELParser.WS);
            this.state = 200; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 202;
        this.match(NELParser.COLON);
        this.state = 204; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 203;
            this.match(NELParser.WS);
            this.state = 206; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 208;
        this.pipelineDef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OutboundEndpointDefStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_outboundEndpointDefStatement;
    return this;
}

OutboundEndpointDefStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutboundEndpointDefStatementContext.prototype.constructor = OutboundEndpointDefStatementContext;

OutboundEndpointDefStatementContext.prototype.PARTICIPANT = function() {
    return this.getToken(NELParser.PARTICIPANT, 0);
};

OutboundEndpointDefStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(NELParser.IDENTIFIER, 0);
};

OutboundEndpointDefStatementContext.prototype.COLON = function() {
    return this.getToken(NELParser.COLON, 0);
};

OutboundEndpointDefStatementContext.prototype.outboundEndpointDef = function() {
    return this.getTypedRuleContext(OutboundEndpointDefContext,0);
};

OutboundEndpointDefStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


OutboundEndpointDefStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterOutboundEndpointDefStatement(this);
	}
};

OutboundEndpointDefStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitOutboundEndpointDefStatement(this);
	}
};




NELParser.OutboundEndpointDefStatementContext = OutboundEndpointDefStatementContext;

NELParser.prototype.outboundEndpointDefStatement = function() {

    var localctx = new OutboundEndpointDefStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, NELParser.RULE_outboundEndpointDefStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(NELParser.PARTICIPANT);
        this.state = 212; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 211;
            this.match(NELParser.WS);
            this.state = 214; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 216;
        this.match(NELParser.IDENTIFIER);
        this.state = 218; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 217;
            this.match(NELParser.WS);
            this.state = 220; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 222;
        this.match(NELParser.COLON);
        this.state = 224; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 223;
            this.match(NELParser.WS);
            this.state = 226; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 228;
        this.outboundEndpointDef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GroupStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_groupStatement;
    return this;
}

GroupStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupStatementContext.prototype.constructor = GroupStatementContext;

GroupStatementContext.prototype.groupDefStatement = function() {
    return this.getTypedRuleContext(GroupDefStatementContext,0);
};

GroupStatementContext.prototype.messageflowStatementList = function() {
    return this.getTypedRuleContext(MessageflowStatementListContext,0);
};

GroupStatementContext.prototype.END = function() {
    return this.getToken(NELParser.END, 0);
};

GroupStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterGroupStatement(this);
	}
};

GroupStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitGroupStatement(this);
	}
};




NELParser.GroupStatementContext = GroupStatementContext;

NELParser.prototype.groupStatement = function() {

    var localctx = new GroupStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, NELParser.RULE_groupStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.groupDefStatement();
        this.state = 231;
        this.messageflowStatementList();
        this.state = 232;
        this.match(NELParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GroupDefStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_groupDefStatement;
    return this;
}

GroupDefStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupDefStatementContext.prototype.constructor = GroupDefStatementContext;

GroupDefStatementContext.prototype.GROUP = function() {
    return this.getToken(NELParser.GROUP, 0);
};

GroupDefStatementContext.prototype.GROUP_NAME_DEF = function() {
    return this.getToken(NELParser.GROUP_NAME_DEF, 0);
};

GroupDefStatementContext.prototype.COMMA_SYMBOL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.COMMA_SYMBOL);
    } else {
        return this.getToken(NELParser.COMMA_SYMBOL, i);
    }
};


GroupDefStatementContext.prototype.GROUP_PATH_DEF = function() {
    return this.getToken(NELParser.GROUP_PATH_DEF, 0);
};

GroupDefStatementContext.prototype.GROUP_METHOD_DEF = function() {
    return this.getToken(NELParser.GROUP_METHOD_DEF, 0);
};

GroupDefStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


GroupDefStatementContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.NEWLINE);
    } else {
        return this.getToken(NELParser.NEWLINE, i);
    }
};


GroupDefStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterGroupDefStatement(this);
	}
};

GroupDefStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitGroupDefStatement(this);
	}
};




NELParser.GroupDefStatementContext = GroupDefStatementContext;

NELParser.prototype.groupDefStatement = function() {

    var localctx = new GroupDefStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, NELParser.RULE_groupDefStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(NELParser.GROUP);
        this.state = 236; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 235;
            this.match(NELParser.WS);
            this.state = 238; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 240;
        this.match(NELParser.GROUP_NAME_DEF);
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.WS) {
            this.state = 241;
            this.match(NELParser.WS);
            this.state = 246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 247;
        this.match(NELParser.COMMA_SYMBOL);
        this.state = 251;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.WS) {
            this.state = 248;
            this.match(NELParser.WS);
            this.state = 253;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 254;
        this.match(NELParser.GROUP_PATH_DEF);
        this.state = 255;
        this.match(NELParser.COMMA_SYMBOL);
        this.state = 259;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.WS) {
            this.state = 256;
            this.match(NELParser.WS);
            this.state = 261;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 262;
        this.match(NELParser.GROUP_METHOD_DEF);
        this.state = 264; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 263;
            this.match(NELParser.NEWLINE);
            this.state = 266; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MessageflowStatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_messageflowStatementList;
    return this;
}

MessageflowStatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageflowStatementListContext.prototype.constructor = MessageflowStatementListContext;

MessageflowStatementListContext.prototype.messageflowStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MessageflowStatementContext);
    } else {
        return this.getTypedRuleContext(MessageflowStatementContext,i);
    }
};

MessageflowStatementListContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.NEWLINE);
    } else {
        return this.getToken(NELParser.NEWLINE, i);
    }
};


MessageflowStatementListContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterMessageflowStatementList(this);
	}
};

MessageflowStatementListContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitMessageflowStatementList(this);
	}
};




NELParser.MessageflowStatementListContext = MessageflowStatementListContext;

NELParser.prototype.messageflowStatementList = function() {

    var localctx = new MessageflowStatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, NELParser.RULE_messageflowStatementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NELParser.COMMENTST) | (1 << NELParser.HASHCOMMENTST) | (1 << NELParser.DOUBLESLASHCOMMENTST) | (1 << NELParser.MEDIATORDEFINITIONX))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (NELParser.VARX - 51)) | (1 << (NELParser.PAR - 51)) | (1 << (NELParser.IF - 51)) | (1 << (NELParser.REF - 51)) | (1 << (NELParser.LOOP - 51)))) !== 0) || _la===NELParser.IDENTIFIER || _la===NELParser.VAR_IDENTIFIER) {
            this.state = 268;
            this.messageflowStatement();
            this.state = 270; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 269;
            		this.match(NELParser.NEWLINE);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 272; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,28, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 278;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MessageflowStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_messageflowStatement;
    return this;
}

MessageflowStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageflowStatementContext.prototype.constructor = MessageflowStatementContext;

MessageflowStatementContext.prototype.routingStatement = function() {
    return this.getTypedRuleContext(RoutingStatementContext,0);
};

MessageflowStatementContext.prototype.mediatorStatement = function() {
    return this.getTypedRuleContext(MediatorStatementContext,0);
};

MessageflowStatementContext.prototype.parallelStatement = function() {
    return this.getTypedRuleContext(ParallelStatementContext,0);
};

MessageflowStatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

MessageflowStatementContext.prototype.loopStatement = function() {
    return this.getTypedRuleContext(LoopStatementContext,0);
};

MessageflowStatementContext.prototype.refStatement = function() {
    return this.getTypedRuleContext(RefStatementContext,0);
};

MessageflowStatementContext.prototype.variableStatement = function() {
    return this.getTypedRuleContext(VariableStatementContext,0);
};

MessageflowStatementContext.prototype.commentStatement = function() {
    return this.getTypedRuleContext(CommentStatementContext,0);
};

MessageflowStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterMessageflowStatement(this);
	}
};

MessageflowStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitMessageflowStatement(this);
	}
};




NELParser.MessageflowStatementContext = MessageflowStatementContext;

NELParser.prototype.messageflowStatement = function() {

    var localctx = new MessageflowStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, NELParser.RULE_messageflowStatement);
    try {
        this.state = 287;
        switch(this._input.LA(1)) {
        case NELParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 279;
            this.routingStatement();
            break;
        case NELParser.MEDIATORDEFINITIONX:
            this.enterOuterAlt(localctx, 2);
            this.state = 280;
            this.mediatorStatement();
            break;
        case NELParser.PAR:
            this.enterOuterAlt(localctx, 3);
            this.state = 281;
            this.parallelStatement();
            break;
        case NELParser.IF:
            this.enterOuterAlt(localctx, 4);
            this.state = 282;
            this.ifStatement();
            break;
        case NELParser.LOOP:
            this.enterOuterAlt(localctx, 5);
            this.state = 283;
            this.loopStatement();
            break;
        case NELParser.REF:
            this.enterOuterAlt(localctx, 6);
            this.state = 284;
            this.refStatement();
            break;
        case NELParser.VARX:
        case NELParser.VAR_IDENTIFIER:
            this.enterOuterAlt(localctx, 7);
            this.state = 285;
            this.variableStatement();
            break;
        case NELParser.COMMENTST:
        case NELParser.HASHCOMMENTST:
        case NELParser.DOUBLESLASHCOMMENTST:
            this.enterOuterAlt(localctx, 8);
            this.state = 286;
            this.commentStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MediatorStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_mediatorStatement;
    return this;
}

MediatorStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediatorStatementContext.prototype.constructor = MediatorStatementContext;

MediatorStatementContext.prototype.mediatorStatementDef = function() {
    return this.getTypedRuleContext(MediatorStatementDefContext,0);
};

MediatorStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterMediatorStatement(this);
	}
};

MediatorStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitMediatorStatement(this);
	}
};




NELParser.MediatorStatementContext = MediatorStatementContext;

NELParser.prototype.mediatorStatement = function() {

    var localctx = new MediatorStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, NELParser.RULE_mediatorStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        this.mediatorStatementDef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MediatorStatementDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_mediatorStatementDef;
    return this;
}

MediatorStatementDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediatorStatementDefContext.prototype.constructor = MediatorStatementDefContext;

MediatorStatementDefContext.prototype.MEDIATORDEFINITIONX = function() {
    return this.getToken(NELParser.MEDIATORDEFINITIONX, 0);
};

MediatorStatementDefContext.prototype.ARGUMENTLISTDEF = function() {
    return this.getToken(NELParser.ARGUMENTLISTDEF, 0);
};

MediatorStatementDefContext.prototype.logMediatorStatementDef = function() {
    return this.getTypedRuleContext(LogMediatorStatementDefContext,0);
};

MediatorStatementDefContext.prototype.headerMediatorStatementDef = function() {
    return this.getTypedRuleContext(HeaderMediatorStatementDefContext,0);
};

MediatorStatementDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterMediatorStatementDef(this);
	}
};

MediatorStatementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitMediatorStatementDef(this);
	}
};




NELParser.MediatorStatementDefContext = MediatorStatementDefContext;

NELParser.prototype.mediatorStatementDef = function() {

    var localctx = new MediatorStatementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, NELParser.RULE_mediatorStatementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this.match(NELParser.MEDIATORDEFINITIONX);
        this.state = 293;
        _la = this._input.LA(1);
        if(_la===NELParser.ARGUMENTLISTDEF) {
            this.state = 292;
            this.match(NELParser.ARGUMENTLISTDEF);
        }

        this.state = 296;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        if(la_===1) {
            this.state = 295;
            this.logMediatorStatementDef();

        }
        this.state = 299;
        _la = this._input.LA(1);
        if(_la===NELParser.LPAREN) {
            this.state = 298;
            this.headerMediatorStatementDef();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LogMediatorStatementDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_logMediatorStatementDef;
    return this;
}

LogMediatorStatementDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogMediatorStatementDefContext.prototype.constructor = LogMediatorStatementDefContext;

LogMediatorStatementDefContext.prototype.LPAREN = function() {
    return this.getToken(NELParser.LPAREN, 0);
};

LogMediatorStatementDefContext.prototype.LEVELDEF = function() {
    return this.getToken(NELParser.LEVELDEF, 0);
};

LogMediatorStatementDefContext.prototype.RPAREN = function() {
    return this.getToken(NELParser.RPAREN, 0);
};

LogMediatorStatementDefContext.prototype.PARAMX = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.PARAMX);
    } else {
        return this.getToken(NELParser.PARAMX, i);
    }
};


LogMediatorStatementDefContext.prototype.logPropertyStatementDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LogPropertyStatementDefContext);
    } else {
        return this.getTypedRuleContext(LogPropertyStatementDefContext,i);
    }
};

LogMediatorStatementDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterLogMediatorStatementDef(this);
	}
};

LogMediatorStatementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitLogMediatorStatementDef(this);
	}
};




NELParser.LogMediatorStatementDefContext = LogMediatorStatementDefContext;

NELParser.prototype.logMediatorStatementDef = function() {

    var localctx = new LogMediatorStatementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, NELParser.RULE_logMediatorStatementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(NELParser.LPAREN);
        this.state = 302;
        this.match(NELParser.LEVELDEF);
        this.state = 306;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.PARAMX) {
            this.state = 303;
            this.match(NELParser.PARAMX);
            this.state = 308;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 312;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.COMMA_SYMBOL) {
            this.state = 309;
            this.logPropertyStatementDef();
            this.state = 314;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 315;
        this.match(NELParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LogPropertyStatementDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_logPropertyStatementDef;
    return this;
}

LogPropertyStatementDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogPropertyStatementDefContext.prototype.constructor = LogPropertyStatementDefContext;

LogPropertyStatementDefContext.prototype.COMMA_SYMBOL = function() {
    return this.getToken(NELParser.COMMA_SYMBOL, 0);
};

LogPropertyStatementDefContext.prototype.PROPERTYDEF = function() {
    return this.getToken(NELParser.PROPERTYDEF, 0);
};

LogPropertyStatementDefContext.prototype.LPAREN = function() {
    return this.getToken(NELParser.LPAREN, 0);
};

LogPropertyStatementDefContext.prototype.KEYDEF = function() {
    return this.getToken(NELParser.KEYDEF, 0);
};

LogPropertyStatementDefContext.prototype.RPAREN = function() {
    return this.getToken(NELParser.RPAREN, 0);
};

LogPropertyStatementDefContext.prototype.VALUEDEF = function() {
    return this.getToken(NELParser.VALUEDEF, 0);
};

LogPropertyStatementDefContext.prototype.XPATHDEF = function() {
    return this.getToken(NELParser.XPATHDEF, 0);
};

LogPropertyStatementDefContext.prototype.nameSpaceStatementDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameSpaceStatementDefContext);
    } else {
        return this.getTypedRuleContext(NameSpaceStatementDefContext,i);
    }
};

LogPropertyStatementDefContext.prototype.JSONPATHDEF = function() {
    return this.getToken(NELParser.JSONPATHDEF, 0);
};

LogPropertyStatementDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterLogPropertyStatementDef(this);
	}
};

LogPropertyStatementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitLogPropertyStatementDef(this);
	}
};




NELParser.LogPropertyStatementDefContext = LogPropertyStatementDefContext;

NELParser.prototype.logPropertyStatementDef = function() {

    var localctx = new LogPropertyStatementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, NELParser.RULE_logPropertyStatementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this.match(NELParser.COMMA_SYMBOL);
        this.state = 318;
        this.match(NELParser.PROPERTYDEF);
        this.state = 319;
        this.match(NELParser.LPAREN);
        this.state = 320;
        this.match(NELParser.KEYDEF);
        this.state = 322;
        _la = this._input.LA(1);
        if(_la===NELParser.VALUEDEF) {
            this.state = 321;
            this.match(NELParser.VALUEDEF);
        }

        this.state = 325;
        _la = this._input.LA(1);
        if(_la===NELParser.XPATHDEF) {
            this.state = 324;
            this.match(NELParser.XPATHDEF);
        }

        this.state = 330;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.COMMA_SYMBOL) {
            this.state = 327;
            this.nameSpaceStatementDef();
            this.state = 332;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 334;
        _la = this._input.LA(1);
        if(_la===NELParser.JSONPATHDEF) {
            this.state = 333;
            this.match(NELParser.JSONPATHDEF);
        }

        this.state = 336;
        this.match(NELParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameSpaceStatementDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_nameSpaceStatementDef;
    return this;
}

NameSpaceStatementDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameSpaceStatementDefContext.prototype.constructor = NameSpaceStatementDefContext;

NameSpaceStatementDefContext.prototype.COMMA_SYMBOL = function() {
    return this.getToken(NELParser.COMMA_SYMBOL, 0);
};

NameSpaceStatementDefContext.prototype.NAMESPACEDEF = function() {
    return this.getToken(NELParser.NAMESPACEDEF, 0);
};

NameSpaceStatementDefContext.prototype.LPAREN = function() {
    return this.getToken(NELParser.LPAREN, 0);
};

NameSpaceStatementDefContext.prototype.PREFIXDEF = function() {
    return this.getToken(NELParser.PREFIXDEF, 0);
};

NameSpaceStatementDefContext.prototype.URIDEF = function() {
    return this.getToken(NELParser.URIDEF, 0);
};

NameSpaceStatementDefContext.prototype.RPAREN = function() {
    return this.getToken(NELParser.RPAREN, 0);
};

NameSpaceStatementDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterNameSpaceStatementDef(this);
	}
};

NameSpaceStatementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitNameSpaceStatementDef(this);
	}
};




NELParser.NameSpaceStatementDefContext = NameSpaceStatementDefContext;

NELParser.prototype.nameSpaceStatementDef = function() {

    var localctx = new NameSpaceStatementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, NELParser.RULE_nameSpaceStatementDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this.match(NELParser.COMMA_SYMBOL);
        this.state = 339;
        this.match(NELParser.NAMESPACEDEF);
        this.state = 340;
        this.match(NELParser.LPAREN);
        this.state = 341;
        this.match(NELParser.PREFIXDEF);
        this.state = 342;
        this.match(NELParser.URIDEF);
        this.state = 343;
        this.match(NELParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HeaderMediatorStatementDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_headerMediatorStatementDef;
    return this;
}

HeaderMediatorStatementDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderMediatorStatementDefContext.prototype.constructor = HeaderMediatorStatementDefContext;

HeaderMediatorStatementDefContext.prototype.LPAREN = function() {
    return this.getToken(NELParser.LPAREN, 0);
};

HeaderMediatorStatementDefContext.prototype.NAMEDEF = function() {
    return this.getToken(NELParser.NAMEDEF, 0);
};

HeaderMediatorStatementDefContext.prototype.RPAREN = function() {
    return this.getToken(NELParser.RPAREN, 0);
};

HeaderMediatorStatementDefContext.prototype.PARAMX = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.PARAMX);
    } else {
        return this.getToken(NELParser.PARAMX, i);
    }
};


HeaderMediatorStatementDefContext.prototype.VALUEDEF = function() {
    return this.getToken(NELParser.VALUEDEF, 0);
};

HeaderMediatorStatementDefContext.prototype.XPATHDEF = function() {
    return this.getToken(NELParser.XPATHDEF, 0);
};

HeaderMediatorStatementDefContext.prototype.nameSpaceStatementDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameSpaceStatementDefContext);
    } else {
        return this.getTypedRuleContext(NameSpaceStatementDefContext,i);
    }
};

HeaderMediatorStatementDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterHeaderMediatorStatementDef(this);
	}
};

HeaderMediatorStatementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitHeaderMediatorStatementDef(this);
	}
};




NELParser.HeaderMediatorStatementDefContext = HeaderMediatorStatementDefContext;

NELParser.prototype.headerMediatorStatementDef = function() {

    var localctx = new HeaderMediatorStatementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, NELParser.RULE_headerMediatorStatementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.match(NELParser.LPAREN);
        this.state = 346;
        this.match(NELParser.NAMEDEF);
        this.state = 350;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.PARAMX) {
            this.state = 347;
            this.match(NELParser.PARAMX);
            this.state = 352;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 354;
        _la = this._input.LA(1);
        if(_la===NELParser.VALUEDEF) {
            this.state = 353;
            this.match(NELParser.VALUEDEF);
        }

        this.state = 357;
        _la = this._input.LA(1);
        if(_la===NELParser.XPATHDEF) {
            this.state = 356;
            this.match(NELParser.XPATHDEF);
        }

        this.state = 362;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.COMMA_SYMBOL) {
            this.state = 359;
            this.nameSpaceStatementDef();
            this.state = 364;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 365;
        this.match(NELParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntegrationFlowDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_integrationFlowDef;
    return this;
}

IntegrationFlowDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntegrationFlowDefContext.prototype.constructor = IntegrationFlowDefContext;

IntegrationFlowDefContext.prototype.INTEGRATIONFLOWX = function() {
    return this.getToken(NELParser.INTEGRATIONFLOWX, 0);
};

IntegrationFlowDefContext.prototype.LPAREN = function() {
    return this.getToken(NELParser.LPAREN, 0);
};

IntegrationFlowDefContext.prototype.STRINGX = function() {
    return this.getToken(NELParser.STRINGX, 0);
};

IntegrationFlowDefContext.prototype.RPAREN = function() {
    return this.getToken(NELParser.RPAREN, 0);
};

IntegrationFlowDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterIntegrationFlowDef(this);
	}
};

IntegrationFlowDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitIntegrationFlowDef(this);
	}
};




NELParser.IntegrationFlowDefContext = IntegrationFlowDefContext;

NELParser.prototype.integrationFlowDef = function() {

    var localctx = new IntegrationFlowDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, NELParser.RULE_integrationFlowDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this.match(NELParser.INTEGRATIONFLOWX);
        this.state = 368;
        this.match(NELParser.LPAREN);
        this.state = 369;
        this.match(NELParser.STRINGX);
        this.state = 370;
        this.match(NELParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InboundEndpointDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_inboundEndpointDef;
    return this;
}

InboundEndpointDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InboundEndpointDefContext.prototype.constructor = InboundEndpointDefContext;

InboundEndpointDefContext.prototype.INBOUNDENDPOINTX = function() {
    return this.getToken(NELParser.INBOUNDENDPOINTX, 0);
};

InboundEndpointDefContext.prototype.LPAREN = function() {
    return this.getToken(NELParser.LPAREN, 0);
};

InboundEndpointDefContext.prototype.PROTOCOLDEF = function() {
    return this.getToken(NELParser.PROTOCOLDEF, 0);
};

InboundEndpointDefContext.prototype.RPAREN = function() {
    return this.getToken(NELParser.RPAREN, 0);
};

InboundEndpointDefContext.prototype.PARAMX = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.PARAMX);
    } else {
        return this.getToken(NELParser.PARAMX, i);
    }
};


InboundEndpointDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterInboundEndpointDef(this);
	}
};

InboundEndpointDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitInboundEndpointDef(this);
	}
};




NELParser.InboundEndpointDefContext = InboundEndpointDefContext;

NELParser.prototype.inboundEndpointDef = function() {

    var localctx = new InboundEndpointDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, NELParser.RULE_inboundEndpointDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 372;
        this.match(NELParser.INBOUNDENDPOINTX);
        this.state = 373;
        this.match(NELParser.LPAREN);
        this.state = 374;
        this.match(NELParser.PROTOCOLDEF);
        this.state = 378;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.PARAMX) {
            this.state = 375;
            this.match(NELParser.PARAMX);
            this.state = 380;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 381;
        this.match(NELParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PipelineDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_pipelineDef;
    return this;
}

PipelineDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PipelineDefContext.prototype.constructor = PipelineDefContext;

PipelineDefContext.prototype.PIPELINEX = function() {
    return this.getToken(NELParser.PIPELINEX, 0);
};

PipelineDefContext.prototype.LPAREN = function() {
    return this.getToken(NELParser.LPAREN, 0);
};

PipelineDefContext.prototype.COMMENTSTRINGX = function() {
    return this.getToken(NELParser.COMMENTSTRINGX, 0);
};

PipelineDefContext.prototype.RPAREN = function() {
    return this.getToken(NELParser.RPAREN, 0);
};

PipelineDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterPipelineDef(this);
	}
};

PipelineDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitPipelineDef(this);
	}
};




NELParser.PipelineDefContext = PipelineDefContext;

NELParser.prototype.pipelineDef = function() {

    var localctx = new PipelineDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, NELParser.RULE_pipelineDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 383;
        this.match(NELParser.PIPELINEX);
        this.state = 384;
        this.match(NELParser.LPAREN);
        this.state = 385;
        this.match(NELParser.COMMENTSTRINGX);
        this.state = 386;
        this.match(NELParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OutboundEndpointDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_outboundEndpointDef;
    return this;
}

OutboundEndpointDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OutboundEndpointDefContext.prototype.constructor = OutboundEndpointDefContext;

OutboundEndpointDefContext.prototype.OUTBOUNDENDPOINTX = function() {
    return this.getToken(NELParser.OUTBOUNDENDPOINTX, 0);
};

OutboundEndpointDefContext.prototype.LPAREN = function() {
    return this.getToken(NELParser.LPAREN, 0);
};

OutboundEndpointDefContext.prototype.PROTOCOLDEF = function() {
    return this.getToken(NELParser.PROTOCOLDEF, 0);
};

OutboundEndpointDefContext.prototype.RPAREN = function() {
    return this.getToken(NELParser.RPAREN, 0);
};

OutboundEndpointDefContext.prototype.PARAMX = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.PARAMX);
    } else {
        return this.getToken(NELParser.PARAMX, i);
    }
};


OutboundEndpointDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterOutboundEndpointDef(this);
	}
};

OutboundEndpointDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitOutboundEndpointDef(this);
	}
};




NELParser.OutboundEndpointDefContext = OutboundEndpointDefContext;

NELParser.prototype.outboundEndpointDef = function() {

    var localctx = new OutboundEndpointDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, NELParser.RULE_outboundEndpointDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        this.match(NELParser.OUTBOUNDENDPOINTX);
        this.state = 389;
        this.match(NELParser.LPAREN);
        this.state = 390;
        this.match(NELParser.PROTOCOLDEF);
        this.state = 394;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.PARAMX) {
            this.state = 391;
            this.match(NELParser.PARAMX);
            this.state = 396;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 397;
        this.match(NELParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RoutingStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_routingStatement;
    return this;
}

RoutingStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RoutingStatementContext.prototype.constructor = RoutingStatementContext;

RoutingStatementContext.prototype.routingStatementDef = function() {
    return this.getTypedRuleContext(RoutingStatementDefContext,0);
};

RoutingStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterRoutingStatement(this);
	}
};

RoutingStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitRoutingStatement(this);
	}
};




NELParser.RoutingStatementContext = RoutingStatementContext;

NELParser.prototype.routingStatement = function() {

    var localctx = new RoutingStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, NELParser.RULE_routingStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 399;
        this.routingStatementDef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RoutingStatementDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_routingStatementDef;
    return this;
}

RoutingStatementDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RoutingStatementDefContext.prototype.constructor = RoutingStatementDefContext;

RoutingStatementDefContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.IDENTIFIER);
    } else {
        return this.getToken(NELParser.IDENTIFIER, i);
    }
};


RoutingStatementDefContext.prototype.ARROWX = function() {
    return this.getToken(NELParser.ARROWX, 0);
};

RoutingStatementDefContext.prototype.COLON = function() {
    return this.getToken(NELParser.COLON, 0);
};

RoutingStatementDefContext.prototype.COMMENTSTRINGX = function() {
    return this.getToken(NELParser.COMMENTSTRINGX, 0);
};

RoutingStatementDefContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


RoutingStatementDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterRoutingStatementDef(this);
	}
};

RoutingStatementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitRoutingStatementDef(this);
	}
};




NELParser.RoutingStatementDefContext = RoutingStatementDefContext;

NELParser.prototype.routingStatementDef = function() {

    var localctx = new RoutingStatementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, NELParser.RULE_routingStatementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
        this.match(NELParser.IDENTIFIER);
        this.state = 403; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 402;
            this.match(NELParser.WS);
            this.state = 405; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 407;
        this.match(NELParser.ARROWX);
        this.state = 409; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 408;
            this.match(NELParser.WS);
            this.state = 411; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 413;
        this.match(NELParser.IDENTIFIER);
        this.state = 415; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 414;
            this.match(NELParser.WS);
            this.state = 417; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 419;
        this.match(NELParser.COLON);
        this.state = 421; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 420;
            this.match(NELParser.WS);
            this.state = 423; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 425;
        this.match(NELParser.COMMENTSTRINGX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_variableStatement;
    return this;
}

VariableStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableStatementContext.prototype.constructor = VariableStatementContext;

VariableStatementContext.prototype.variableDeclarationStatement = function() {
    return this.getTypedRuleContext(VariableDeclarationStatementContext,0);
};

VariableStatementContext.prototype.variableAssignmentStatement = function() {
    return this.getTypedRuleContext(VariableAssignmentStatementContext,0);
};

VariableStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterVariableStatement(this);
	}
};

VariableStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitVariableStatement(this);
	}
};




NELParser.VariableStatementContext = VariableStatementContext;

NELParser.prototype.variableStatement = function() {

    var localctx = new VariableStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, NELParser.RULE_variableStatement);
    try {
        this.state = 429;
        switch(this._input.LA(1)) {
        case NELParser.VARX:
            this.enterOuterAlt(localctx, 1);
            this.state = 427;
            this.variableDeclarationStatement();
            break;
        case NELParser.VAR_IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 428;
            this.variableAssignmentStatement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableDeclarationStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_variableDeclarationStatement;
    return this;
}

VariableDeclarationStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationStatementContext.prototype.constructor = VariableDeclarationStatementContext;

VariableDeclarationStatementContext.prototype.VARX = function() {
    return this.getToken(NELParser.VARX, 0);
};

VariableDeclarationStatementContext.prototype.TYPEDEFINITIONX = function() {
    return this.getToken(NELParser.TYPEDEFINITIONX, 0);
};

VariableDeclarationStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(NELParser.IDENTIFIER, 0);
};

VariableDeclarationStatementContext.prototype.EQ_SYMBOL = function() {
    return this.getToken(NELParser.EQ_SYMBOL, 0);
};

VariableDeclarationStatementContext.prototype.COMMENTSTRINGX = function() {
    return this.getToken(NELParser.COMMENTSTRINGX, 0);
};

VariableDeclarationStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


VariableDeclarationStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterVariableDeclarationStatement(this);
	}
};

VariableDeclarationStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitVariableDeclarationStatement(this);
	}
};




NELParser.VariableDeclarationStatementContext = VariableDeclarationStatementContext;

NELParser.prototype.variableDeclarationStatement = function() {

    var localctx = new VariableDeclarationStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, NELParser.RULE_variableDeclarationStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 431;
        this.match(NELParser.VARX);
        this.state = 433; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 432;
            this.match(NELParser.WS);
            this.state = 435; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 437;
        this.match(NELParser.TYPEDEFINITIONX);
        this.state = 439; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 438;
            this.match(NELParser.WS);
            this.state = 441; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 443;
        this.match(NELParser.IDENTIFIER);
        this.state = 447;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.WS) {
            this.state = 444;
            this.match(NELParser.WS);
            this.state = 449;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 450;
        this.match(NELParser.EQ_SYMBOL);
        this.state = 454;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.WS) {
            this.state = 451;
            this.match(NELParser.WS);
            this.state = 456;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 457;
        this.match(NELParser.COMMENTSTRINGX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableAssignmentStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_variableAssignmentStatement;
    return this;
}

VariableAssignmentStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableAssignmentStatementContext.prototype.constructor = VariableAssignmentStatementContext;

VariableAssignmentStatementContext.prototype.VAR_IDENTIFIER = function() {
    return this.getToken(NELParser.VAR_IDENTIFIER, 0);
};

VariableAssignmentStatementContext.prototype.COMMENTSTRINGX = function() {
    return this.getToken(NELParser.COMMENTSTRINGX, 0);
};

VariableAssignmentStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


VariableAssignmentStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterVariableAssignmentStatement(this);
	}
};

VariableAssignmentStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitVariableAssignmentStatement(this);
	}
};




NELParser.VariableAssignmentStatementContext = VariableAssignmentStatementContext;

NELParser.prototype.variableAssignmentStatement = function() {

    var localctx = new VariableAssignmentStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, NELParser.RULE_variableAssignmentStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 459;
        this.match(NELParser.VAR_IDENTIFIER);
        this.state = 463;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.WS) {
            this.state = 460;
            this.match(NELParser.WS);
            this.state = 465;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 466;
        this.match(NELParser.COMMENTSTRINGX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_constStatement;
    return this;
}

ConstStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstStatementContext.prototype.constructor = ConstStatementContext;

ConstStatementContext.prototype.CONSTX = function() {
    return this.getToken(NELParser.CONSTX, 0);
};

ConstStatementContext.prototype.TYPEDEFINITIONX = function() {
    return this.getToken(NELParser.TYPEDEFINITIONX, 0);
};

ConstStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(NELParser.IDENTIFIER, 0);
};

ConstStatementContext.prototype.EQ_SYMBOL = function() {
    return this.getToken(NELParser.EQ_SYMBOL, 0);
};

ConstStatementContext.prototype.COMMENTSTRINGX = function() {
    return this.getToken(NELParser.COMMENTSTRINGX, 0);
};

ConstStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


ConstStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterConstStatement(this);
	}
};

ConstStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitConstStatement(this);
	}
};




NELParser.ConstStatementContext = ConstStatementContext;

NELParser.prototype.constStatement = function() {

    var localctx = new ConstStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, NELParser.RULE_constStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 468;
        this.match(NELParser.CONSTX);
        this.state = 470; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 469;
            this.match(NELParser.WS);
            this.state = 472; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 474;
        this.match(NELParser.TYPEDEFINITIONX);
        this.state = 476; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 475;
            this.match(NELParser.WS);
            this.state = 478; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.WS);
        this.state = 480;
        this.match(NELParser.IDENTIFIER);
        this.state = 484;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.WS) {
            this.state = 481;
            this.match(NELParser.WS);
            this.state = 486;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 487;
        this.match(NELParser.EQ_SYMBOL);
        this.state = 491;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.WS) {
            this.state = 488;
            this.match(NELParser.WS);
            this.state = 493;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 494;
        this.match(NELParser.COMMENTSTRINGX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParallelStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_parallelStatement;
    return this;
}

ParallelStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParallelStatementContext.prototype.constructor = ParallelStatementContext;

ParallelStatementContext.prototype.PAR = function() {
    return this.getToken(NELParser.PAR, 0);
};

ParallelStatementContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.NEWLINE);
    } else {
        return this.getToken(NELParser.NEWLINE, i);
    }
};


ParallelStatementContext.prototype.parMultiThenBlock = function() {
    return this.getTypedRuleContext(ParMultiThenBlockContext,0);
};

ParallelStatementContext.prototype.END = function() {
    return this.getToken(NELParser.END, 0);
};

ParallelStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterParallelStatement(this);
	}
};

ParallelStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitParallelStatement(this);
	}
};




NELParser.ParallelStatementContext = ParallelStatementContext;

NELParser.prototype.parallelStatement = function() {

    var localctx = new ParallelStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, NELParser.RULE_parallelStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 496;
        this.match(NELParser.PAR);
        this.state = 498;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
        if(la_===1) {
            this.state = 497;
            this.match(NELParser.NEWLINE);

        }
        this.state = 500;
        this.match(NELParser.NEWLINE);
        this.state = 501;
        this.parMultiThenBlock();
        this.state = 502;
        this.match(NELParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParMultiThenBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_parMultiThenBlock;
    return this;
}

ParMultiThenBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParMultiThenBlockContext.prototype.constructor = ParMultiThenBlockContext;

ParMultiThenBlockContext.prototype.messageflowStatementList = function() {
    return this.getTypedRuleContext(MessageflowStatementListContext,0);
};

ParMultiThenBlockContext.prototype.NEWLINE = function() {
    return this.getToken(NELParser.NEWLINE, 0);
};

ParMultiThenBlockContext.prototype.parElseBlock = function() {
    return this.getTypedRuleContext(ParElseBlockContext,0);
};

ParMultiThenBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterParMultiThenBlock(this);
	}
};

ParMultiThenBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitParMultiThenBlock(this);
	}
};




NELParser.ParMultiThenBlockContext = ParMultiThenBlockContext;

NELParser.prototype.parMultiThenBlock = function() {

    var localctx = new ParMultiThenBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, NELParser.RULE_parMultiThenBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 504;
        this.messageflowStatementList();
        this.state = 505;
        this.match(NELParser.NEWLINE);
        this.state = 507;
        _la = this._input.LA(1);
        if(_la===NELParser.ELSE) {
            this.state = 506;
            this.parElseBlock();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParElseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_parElseBlock;
    return this;
}

ParElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParElseBlockContext.prototype.constructor = ParElseBlockContext;

ParElseBlockContext.prototype.ELSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.ELSE);
    } else {
        return this.getToken(NELParser.ELSE, i);
    }
};


ParElseBlockContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.NEWLINE);
    } else {
        return this.getToken(NELParser.NEWLINE, i);
    }
};


ParElseBlockContext.prototype.messageflowStatementList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MessageflowStatementListContext);
    } else {
        return this.getTypedRuleContext(MessageflowStatementListContext,i);
    }
};

ParElseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterParElseBlock(this);
	}
};

ParElseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitParElseBlock(this);
	}
};




NELParser.ParElseBlockContext = ParElseBlockContext;

NELParser.prototype.parElseBlock = function() {

    var localctx = new ParElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, NELParser.RULE_parElseBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 512; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 509;
            this.match(NELParser.ELSE);
            this.state = 510;
            this.match(NELParser.NEWLINE);
            this.state = 511;
            this.messageflowStatementList();
            this.state = 514; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.ELSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.IF = function() {
    return this.getToken(NELParser.IF, 0);
};

IfStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.WS);
    } else {
        return this.getToken(NELParser.WS, i);
    }
};


IfStatementContext.prototype.WITH = function() {
    return this.getToken(NELParser.WITH, 0);
};

IfStatementContext.prototype.conditionStatement = function() {
    return this.getTypedRuleContext(ConditionStatementContext,0);
};

IfStatementContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.NEWLINE);
    } else {
        return this.getToken(NELParser.NEWLINE, i);
    }
};


IfStatementContext.prototype.ifMultiThenBlock = function() {
    return this.getTypedRuleContext(IfMultiThenBlockContext,0);
};

IfStatementContext.prototype.END = function() {
    return this.getToken(NELParser.END, 0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitIfStatement(this);
	}
};




NELParser.IfStatementContext = IfStatementContext;

NELParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, NELParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 516;
        this.match(NELParser.IF);
        this.state = 517;
        this.match(NELParser.WS);
        this.state = 518;
        this.match(NELParser.WITH);
        this.state = 519;
        this.match(NELParser.WS);
        this.state = 520;
        this.conditionStatement();
        this.state = 521;
        this.match(NELParser.NEWLINE);
        this.state = 523;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        if(la_===1) {
            this.state = 522;
            this.match(NELParser.NEWLINE);

        }
        this.state = 525;
        this.ifMultiThenBlock();
        this.state = 526;
        this.match(NELParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_conditionStatement;
    return this;
}

ConditionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionStatementContext.prototype.constructor = ConditionStatementContext;

ConditionStatementContext.prototype.conditionDef = function() {
    return this.getTypedRuleContext(ConditionDefContext,0);
};

ConditionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterConditionStatement(this);
	}
};

ConditionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitConditionStatement(this);
	}
};




NELParser.ConditionStatementContext = ConditionStatementContext;

NELParser.prototype.conditionStatement = function() {

    var localctx = new ConditionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, NELParser.RULE_conditionStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 528;
        this.conditionDef();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_conditionDef;
    return this;
}

ConditionDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionDefContext.prototype.constructor = ConditionDefContext;

ConditionDefContext.prototype.CONDITIONX = function() {
    return this.getToken(NELParser.CONDITIONX, 0);
};

ConditionDefContext.prototype.LPAREN = function() {
    return this.getToken(NELParser.LPAREN, 0);
};

ConditionDefContext.prototype.SOURCEDEF = function() {
    return this.getToken(NELParser.SOURCEDEF, 0);
};

ConditionDefContext.prototype.RPAREN = function() {
    return this.getToken(NELParser.RPAREN, 0);
};

ConditionDefContext.prototype.PARAMX = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.PARAMX);
    } else {
        return this.getToken(NELParser.PARAMX, i);
    }
};


ConditionDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterConditionDef(this);
	}
};

ConditionDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitConditionDef(this);
	}
};




NELParser.ConditionDefContext = ConditionDefContext;

NELParser.prototype.conditionDef = function() {

    var localctx = new ConditionDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, NELParser.RULE_conditionDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 530;
        this.match(NELParser.CONDITIONX);
        this.state = 531;
        this.match(NELParser.LPAREN);
        this.state = 532;
        this.match(NELParser.SOURCEDEF);
        this.state = 536;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NELParser.PARAMX) {
            this.state = 533;
            this.match(NELParser.PARAMX);
            this.state = 538;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 539;
        this.match(NELParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfMultiThenBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_ifMultiThenBlock;
    return this;
}

IfMultiThenBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfMultiThenBlockContext.prototype.constructor = IfMultiThenBlockContext;

IfMultiThenBlockContext.prototype.messageflowStatementList = function() {
    return this.getTypedRuleContext(MessageflowStatementListContext,0);
};

IfMultiThenBlockContext.prototype.NEWLINE = function() {
    return this.getToken(NELParser.NEWLINE, 0);
};

IfMultiThenBlockContext.prototype.ifElseBlock = function() {
    return this.getTypedRuleContext(IfElseBlockContext,0);
};

IfMultiThenBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterIfMultiThenBlock(this);
	}
};

IfMultiThenBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitIfMultiThenBlock(this);
	}
};




NELParser.IfMultiThenBlockContext = IfMultiThenBlockContext;

NELParser.prototype.ifMultiThenBlock = function() {

    var localctx = new IfMultiThenBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, NELParser.RULE_ifMultiThenBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 541;
        this.messageflowStatementList();
        this.state = 542;
        this.match(NELParser.NEWLINE);
        this.state = 544;
        _la = this._input.LA(1);
        if(_la===NELParser.ELSE) {
            this.state = 543;
            this.ifElseBlock();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfElseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_ifElseBlock;
    return this;
}

IfElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfElseBlockContext.prototype.constructor = IfElseBlockContext;

IfElseBlockContext.prototype.ELSE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.ELSE);
    } else {
        return this.getToken(NELParser.ELSE, i);
    }
};


IfElseBlockContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.NEWLINE);
    } else {
        return this.getToken(NELParser.NEWLINE, i);
    }
};


IfElseBlockContext.prototype.messageflowStatementList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MessageflowStatementListContext);
    } else {
        return this.getTypedRuleContext(MessageflowStatementListContext,i);
    }
};

IfElseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterIfElseBlock(this);
	}
};

IfElseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitIfElseBlock(this);
	}
};




NELParser.IfElseBlockContext = IfElseBlockContext;

NELParser.prototype.ifElseBlock = function() {

    var localctx = new IfElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, NELParser.RULE_ifElseBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 549; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 546;
            this.match(NELParser.ELSE);
            this.state = 547;
            this.match(NELParser.NEWLINE);
            this.state = 548;
            this.messageflowStatementList();
            this.state = 551; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===NELParser.ELSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LoopStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_loopStatement;
    return this;
}

LoopStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopStatementContext.prototype.constructor = LoopStatementContext;

LoopStatementContext.prototype.LOOP = function() {
    return this.getToken(NELParser.LOOP, 0);
};

LoopStatementContext.prototype.WS = function() {
    return this.getToken(NELParser.WS, 0);
};

LoopStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LoopStatementContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(NELParser.NEWLINE);
    } else {
        return this.getToken(NELParser.NEWLINE, i);
    }
};


LoopStatementContext.prototype.messageflowStatementList = function() {
    return this.getTypedRuleContext(MessageflowStatementListContext,0);
};

LoopStatementContext.prototype.END = function() {
    return this.getToken(NELParser.END, 0);
};

LoopStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterLoopStatement(this);
	}
};

LoopStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitLoopStatement(this);
	}
};




NELParser.LoopStatementContext = LoopStatementContext;

NELParser.prototype.loopStatement = function() {

    var localctx = new LoopStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, NELParser.RULE_loopStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 553;
        this.match(NELParser.LOOP);
        this.state = 554;
        this.match(NELParser.WS);
        this.state = 555;
        this.expression();
        this.state = 556;
        this.match(NELParser.NEWLINE);
        this.state = 558;
        _la = this._input.LA(1);
        if(_la===NELParser.NEWLINE) {
            this.state = 557;
            this.match(NELParser.NEWLINE);
        }

        this.state = 560;
        this.messageflowStatementList();
        this.state = 561;
        this.match(NELParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RefStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_refStatement;
    return this;
}

RefStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefStatementContext.prototype.constructor = RefStatementContext;

RefStatementContext.prototype.REF = function() {
    return this.getToken(NELParser.REF, 0);
};

RefStatementContext.prototype.WS = function() {
    return this.getToken(NELParser.WS, 0);
};

RefStatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(NELParser.IDENTIFIER, 0);
};

RefStatementContext.prototype.NEWLINE = function() {
    return this.getToken(NELParser.NEWLINE, 0);
};

RefStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterRefStatement(this);
	}
};

RefStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitRefStatement(this);
	}
};




NELParser.RefStatementContext = RefStatementContext;

NELParser.prototype.refStatement = function() {

    var localctx = new RefStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, NELParser.RULE_refStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 563;
        this.match(NELParser.REF);
        this.state = 564;
        this.match(NELParser.WS);
        this.state = 565;
        this.match(NELParser.IDENTIFIER);
        this.state = 567;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
        if(la_===1) {
            this.state = 566;
            this.match(NELParser.NEWLINE);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommentStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_commentStatement;
    return this;
}

CommentStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentStatementContext.prototype.constructor = CommentStatementContext;

CommentStatementContext.prototype.COMMENTST = function() {
    return this.getToken(NELParser.COMMENTST, 0);
};

CommentStatementContext.prototype.HASHCOMMENTST = function() {
    return this.getToken(NELParser.HASHCOMMENTST, 0);
};

CommentStatementContext.prototype.DOUBLESLASHCOMMENTST = function() {
    return this.getToken(NELParser.DOUBLESLASHCOMMENTST, 0);
};

CommentStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterCommentStatement(this);
	}
};

CommentStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitCommentStatement(this);
	}
};




NELParser.CommentStatementContext = CommentStatementContext;

NELParser.prototype.commentStatement = function() {

    var localctx = new CommentStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, NELParser.RULE_commentStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 569;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NELParser.COMMENTST) | (1 << NELParser.HASHCOMMENTST) | (1 << NELParser.DOUBLESLASHCOMMENTST))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NELParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.EXPRESSIONX = function() {
    return this.getToken(NELParser.EXPRESSIONX, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof NELListener ) {
        listener.exitExpression(this);
	}
};




NELParser.ExpressionContext = ExpressionContext;

NELParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, NELParser.RULE_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 571;
        this.match(NELParser.EXPRESSIONX);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.NELParser = NELParser;
